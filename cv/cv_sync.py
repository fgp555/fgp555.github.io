#!/usr/bin/env python3

from pathlib import Path
import json
import sys

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build


BASE_DIR = Path(__file__).resolve().parent

CREDENTIALS_FILE = BASE_DIR / "cv-sync-credentials.json"
TOKEN_FILE = BASE_DIR / "token.json"
DOCUMENT_ID_FILE = BASE_DIR / ".google-doc-id"

DOCX_FILE = BASE_DIR / "cv_franklin_gomez_fullstack.docx"

INITIAL_DOCUMENT_ID = "1QXvw63hNlLx4HayL5e9AbrjCb5g3ffaQV5JKyAbAHCA"

SCOPES = [
    "https://www.googleapis.com/auth/drive",
]


def authenticate():
    """Authenticate against Google Drive."""

    credentials = None

    if TOKEN_FILE.exists():
        credentials = Credentials.from_authorized_user_file(
            TOKEN_FILE,
            SCOPES,
        )

    if credentials and credentials.valid:
        return credentials

    if credentials and credentials.expired and credentials.refresh_token:
        credentials.refresh(Request())
    else:
        if not CREDENTIALS_FILE.exists():
            raise FileNotFoundError(
                f"No existe el archivo de credenciales:\n"
                f"{CREDENTIALS_FILE}"
            )

        flow = InstalledAppFlow.from_client_secrets_file(
            CREDENTIALS_FILE,
            SCOPES,
        )

        credentials = flow.run_local_server(
            port=0,
            access_type="offline",
            prompt="consent",
        )

    TOKEN_FILE.write_text(
        credentials.to_json(),
        encoding="utf-8",
    )

    return credentials


def get_drive_service():
    credentials = authenticate()

    return build(
        "drive",
        "v3",
        credentials=credentials,
    )


def get_document_id():
    """Return the current Google Doc ID."""

    if DOCUMENT_ID_FILE.exists():
        document_id = DOCUMENT_ID_FILE.read_text(
            encoding="utf-8"
        ).strip()

        if document_id:
            return document_id

    return INITIAL_DOCUMENT_ID


def save_document_id(document_id):
    DOCUMENT_ID_FILE.write_text(
        document_id,
        encoding="utf-8",
    )


def show_status():
    """Show current configuration."""

    document_id = get_document_id()

    print()
    print("CV Sync")
    print("-" * 40)
    print(f"Directory : {BASE_DIR}")
    print(f"DOCX      : {DOCX_FILE}")
    print(f"Credentials: {CREDENTIALS_FILE}")
    print(f"Token     : {TOKEN_FILE}")
    print(f"Document ID: {document_id}")
    print(
        f"Google Doc: "
        f"https://docs.google.com/document/d/{document_id}/edit"
    )
    print("-" * 40)

    if DOCUMENT_ID_FILE.exists():
        print("✓ Usando document ID guardado")
    else:
        print("✓ Usando document ID inicial")


def auth():
    print("Autenticando con Google...")

    credentials = authenticate()

    if credentials and credentials.valid:
        print()
        print("✓ Autenticación completada")
        print(f"✓ Token guardado en: {TOKEN_FILE}")
    else:
        print("✗ No se pudo autenticar")


def pull():
    """
    Google Doc → DOCX local
    """

    if not DOCX_FILE.parent.exists():
        DOCX_FILE.parent.mkdir(
            parents=True,
            exist_ok=True,
        )

    document_id = get_document_id()

    print()
    print("Google Doc → DOCX")
    print("-" * 40)
    print(f"Document ID: {document_id}")
    print(f"Destino    : {DOCX_FILE}")
    print()

    service = get_drive_service()

    try:
        metadata = service.files().get(
            fileId=document_id,
            fields="id,name,mimeType",
        ).execute()

        print(f"Documento : {metadata.get('name')}")
        print(f"MIME type : {metadata.get('mimeType')}")

        request = service.files().get_media(
            fileId=document_id,
        )

        data = request.execute()

        DOCX_FILE.write_bytes(data)

        print()
        print("✓ DOCX descargado")
        print(f"✓ Archivo: {DOCX_FILE}")
        print(f"✓ Tamaño : {len(data):,} bytes")

    except Exception as error:
        print()
        print("✗ Error descargando Google Doc")
        print(error)
        sys.exit(1)


def push():
    """
    DOCX local → Google Doc.

    Siempre actualiza el documento existente: el guardado en
    .google-doc-id si ya se corrió antes, o si no INITIAL_DOCUMENT_ID
    (el doc canónico ya enlazado desde el sitio). Nunca crea un
    documento nuevo automáticamente — así un clon nuevo del repo (donde
    .google-doc-id no existe porque está en .gitignore) no termina
    creando un doc huérfano desincronizado del que enlaza el sitio.

    Usa files().update() subiendo el DOCX como media_body: Drive
    reemplaza el contenido del documento vía la MISMA conversión que usa
    al crear un doc nuevo (conserva negritas, encabezados, viñetas...),
    y conserva el mismo file ID (misma URL). Nada de extraer texto plano
    a mano ni de documentos temporales.
    """

    from googleapiclient.http import MediaFileUpload

    if not DOCX_FILE.exists():
        print("✗ No existe el archivo:")
        print(DOCX_FILE)
        sys.exit(1)

    drive = get_drive_service()

    document_id = get_document_id()

    if not DOCUMENT_ID_FILE.exists():
        save_document_id(document_id)
        print(f"✓ Usando INITIAL_DOCUMENT_ID (guardado en {DOCUMENT_ID_FILE})")

    print()
    print("DOCX → Google Doc")
    print("-" * 40)
    print(f"Archivo: {DOCX_FILE}")
    print(f"Destino: {document_id}")
    print()

    try:
        media = MediaFileUpload(
            str(DOCX_FILE),
            mimetype=(
                "application/vnd.openxmlformats-officedocument"
                ".wordprocessingml.document"
            ),
            resumable=False,
        )

        result = drive.files().update(
            fileId=document_id,
            media_body=media,
            fields="id,name,mimeType,modifiedTime",
        ).execute()

        print("✓ Google Doc actualizado (formato conservado)")
        print(f"✓ Document ID: {result.get('id')}")
        print(f"✓ Modificado : {result.get('modifiedTime')}")
        print(
            "✓ URL: "
            f"https://docs.google.com/document/d/"
            f"{document_id}/edit"
        )

    except Exception as error:
        print()
        print("✗ Error actualizando Google Doc")
        print(error)
        sys.exit(1)

def main():
    if len(sys.argv) < 2:
        print(
            "Uso:\n"
            "  python cv_sync.py auth\n"
            "  python cv_sync.py status\n"
            "  python cv_sync.py pull\n"
            "  python cv_sync.py push"
        )
        sys.exit(1)

    command = sys.argv[1].lower()

    if command == "auth":
        auth()

    elif command == "status":
        show_status()

    elif command == "pull":
        pull()

    elif command == "push":
        push()

    else:
        print(f"Comando desconocido: {command}")
        print()
        print(
            "Comandos disponibles:\n"
            "  auth\n"
            "  status\n"
            "  pull\n"
            "  push"
        )
        sys.exit(1)


if __name__ == "__main__":
    main()