# Textos de publicación — Detector Fibra Óptica - CTR

Los bloques de código contienen textos listos para copiar. Las notas, casillas y fuentes fuera de los bloques son instrucciones y no se pegan en la tienda.

## Descripción corta

```text
Detecta ofertas de Fibra Óptica en CTR y facilita su seguimiento y el registro del resultado en Call Project.
```

## Descripción de la ficha

```text
Detector Fibra Óptica - CTR ayuda a los asesores a identificar y dar seguimiento a oportunidades de actualización a fibra óptica durante la consulta de ofertas.

• Detecta la frase fija «FIBRA OPTICA», ignorando mayúsculas y tildes.
• Resalta las recomendaciones coincidentes y muestra una alerta visual.
• Mantiene la detección y la alerta local aunque el servicio de seguimiento no esté disponible.
• Registra las detecciones y la presencia del asesor en Call Project para supervisión autorizada.
• Permite declarar Venta realizada o Sin venta desde el popup. Pendiente es el estado inicial y puede recuperarse deseleccionando el resultado.
• Conserva envíos pendientes localmente y reintenta su entrega cuando el servicio vuelve a estar disponible.
• Ofrece vinculación opcional de la instalación con una cuenta autorizada.

Funciona en la página de consulta de ofertas de CTR y requiere acceso autorizado a ese sistema. El seguimiento utiliza el ID y nombre visibles del asesor, la referencia consultada, las fechas, señales de presencia y el resultado declarado. Los IDs aún no registrados se conservan pendientes de asignación. El backend protege la referencia mediante un hash y conserva su tipo y últimos cuatro caracteres. Los administradores y supervisores autorizados pueden consultar la actividad según sus permisos.

Instalable en Google Chrome y Microsoft Edge de escritorio desde Chrome Web Store. En Edge puede ser necesario permitir extensiones de otras tiendas. Las políticas de la organización pueden restringir la instalación.

La herramienta no verifica automáticamente una venta ni sustituye el registro comercial oficial. No está afiliada ni patrocinada por Claro.
```

## Propósito único

```text
Detectar y facilitar el seguimiento de oportunidades de Fibra Óptica en la consulta de ofertas de CTR: alertar al asesor, registrar la detección y el resultado declarado, y permitir su supervisión en Call Project con señales de presencia asociadas. Todas las funciones se limitan a ese flujo de oportunidades.
```

## Justificación de permisos de host

```text
El acceso a claroterecomienda.com.pe y sus subdominios permite detectar Fibra Óptica en las recomendaciones y leer el ID y nombre del asesor y la referencia consultada. El acceso limitado a https://frankgp.com/fibra-detector/simulador/ permite probar el mismo flujo con datos ficticios, sin VPN. El acceso a https://call.frankgp.com permite enviar detecciones, resultados y presencia, y realizar la vinculación opcional mediante HTTPS. No se accede al historial general del navegador.
```

## Justificación de storage

```text
Conserva localmente las ofertas y sus resultados, la identidad observada, la cola de envíos y la credencial de instalación si el usuario realiza la vinculación opcional. Permite recuperar el resultado de una consulta y evitar perder envíos cuando el servicio no está disponible.
```

## Justificación de alarms

```text
Programa reintentos de entrega de las detecciones y resultados pendientes mientras el navegador está abierto, incluso cuando el service worker se suspende entre ejecuciones. No se utiliza para publicidad ni seguimiento de navegación.
```

## Declaración de uso de datos — casillas y notas, no copiar

Categorías recomendadas según el comportamiento actual (verificar al completar el formulario):

- Personally identifiable information: ID y nombre del asesor; referencia de documento o teléfono consultada.
- Authentication information: credencial de instalación de la vinculación opcional.
- User activity: detecciones, señales de presencia y resultados declarados.
- Website content: lectura de la identidad y los resultados de la página CTR.

No se recopilan categorías de salud, información bancaria, comunicaciones personales ni ubicación GPS. La infraestructura recibe la IP como metadato de conexión; revisar la categoría Location si se registra, conserva o utiliza para localizar al usuario. No se lee el historial general del navegador. La política explica qué datos se envían, almacenan y ponen a disposición de supervisores y administradores.

Las tres certificaciones del formulario deben aceptarse únicamente si reflejan las prácticas reales: no vender ni transferir fuera de usos permitidos, no utilizar los datos para fines ajenos al propósito declarado y no utilizarlos para decisiones crediticias o préstamos.

## Política de privacidad

```text
https://frankgp.com/fibra-detector/privacy-policy.html
```

Verificar esta URL pública después del despliegue. Si el sitio publica la carpeta con otra ruta, usar la URL real y accesible del archivo. Sustituir la URL anterior de enyeinnovation únicamente cuando la nueva política esté publicada.

## Test instructions — Additional instructions

Usar después de publicar la página y comprobar el paquete 1.0.5. El flujo principal de demostración no requiere credenciales; dejar Username y Password vacíos para ese flujo.

```text
Sin VPN ni login: https://frankgp.com/fibra-detector/simulador/
Instale 1.0.5 y recargue la página. Elija «Con fibra» y pulse Buscar: la extensión resalta la fila y muestra la alerta. Ciérrela; abra el popup y pruebe Venta realizada/Sin venta; repita el botón para volver a Pendiente. Pruebe «Sin fibra» y «Otro cliente con fibra», también con Enter. Los datos son ficticios (asesor E9800001). CTR real requiere VPN; esta página reproduce el flujo.
```

La demo permite revisar detección, alerta y controles del popup. Para comprobar los registros recibidos y la vinculación con Google, preparar una cuenta de revisión de Call Project con permisos limitados en el formulario privado. No incluir credenciales personales ni de VPN en archivos públicos. No afirmar que el dashboard está disponible para el revisor hasta proporcionar ese acceso.

## Fuentes — referencias, no copiar

- https://developer.chrome.com/docs/webstore/program-policies/user-data-faq
- https://support.microsoft.com/en-us/edge/add-turn-off-or-remove-extensions-in-microsoft-edge
