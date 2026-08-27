> **Flujo actual:** edita `cv.md` y corre `./publish.sh` — ver [`SETUP.md`](SETUP.md)
> para el setup completo (Pandoc, credenciales, qué hacer en una máquina nueva).
> Lo de abajo es el setup histórico de `cv_sync.py` por sí solo.

```sh
cd /mnt/e/claude/fullstack/repo-frankgp.com/cv

sudo apt update
sudo apt install -y python3.14-venv

rm -rf .venv
python3 -m venv .venv

source .venv/bin/activate

python --version
pip --version

pip install --upgrade \
  google-api-python-client \
  google-auth-httplib2 \
  google-auth-oauthlib

python cv_sync.py

python cv_sync.py status

python cv_sync.py auth

python cv_sync.py pull

python cv_sync.py auth
python cv_sync.py status
python cv_sync.py pull
python cv_sync.py push

cat .google-doc-id
```