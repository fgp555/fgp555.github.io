Maria Alejandra Gonzales Calderón

• 2º

Recruiter | Talent Acquisition | Headhunter | English & Japanese

30 de sept.

Pendiente
🚀 ¡Buscamos Desarrollador/a Mobile Fullstack Semi Senior!
Estamos buscando un perfil con experiencia desarrollando aplicaciones móviles para iOS y Android, con capacidad para trabajar también con backend e integraciones.
🔹 ¿Qué buscamos?
• 3+ años de experiencia en desarrollo de software, con experiencia comprobable en Mobile.
• Dominio de JavaScript / TypeScript.
• Experiencia con React Native, Flutter o desarrollo nativo.
• Integración y consumo de APIs REST.
• Experiencia con Node.js o Python.
• Manejo de Git, arquitectura, navegación, estados y almacenamiento local.
• Experiencia con autenticación, integraciones y resolución de errores en producción.
⭐ Valoramos: Firebase, Push Notifications, Crashlytics, OAuth/OIDC, AWS, Docker, CI/CD y experiencia publicando aplicaciones en App Store y Google Play.
🎯 Buscamos una persona autónoma, resolutiva y orientada a la calidad del código, capaz de comprender una funcionalidad de extremo a extremo.
📍 Ubicación: Lima, Perú 🇵🇪
💻 Modalidad: 100% Remoto
📩 ¿Te interesa? Envíame tu CV por DM o comparte esta oportunidad con alguien que pueda encajar con el perfil.
#Hiring #MobileDeveloper #ReactNative #Flutter #Fullstack #JavaScript #TypeScript #TechJobs #Lima #Peru #RemoteJobs #Recruitment

En esa oferta de **Desarrollador Mobile Fullstack Semi Senior**, Crashlytics y OIDC son dos tecnologías que conviene conocer, especialmente porque estás trabajando con desarrollo móvil y autenticación.

Te las explico con ejemplos prácticos y comparaciones con las tecnologías que ya conoces.

# 1. ¿Qué es Crashlytics?

Firebase Crashlytics es una herramienta de Firebase que permite **detectar, registrar y analizar errores que hacen que una aplicación móvil se cierre inesperadamente**.

### ¿Para qué sirve?

Imagina que publicas una aplicación Android desarrollada con Kotlin y Jetpack Compose.

Un usuario realiza estos pasos:

1. Abre la aplicación.
2. Entra en la pantalla de perfil.
3. Pulsa un botón.
4. La aplicación se cierra inesperadamente.

Sin Crashlytics, posiblemente no sabrás qué ocurrió, especialmente si no puedes reproducir el error en tu dispositivo.

Con Crashlytics, puedes recibir información como:

- **Tipo de error:** `NullPointerException`.
- **Stack trace:** dónde se produjo el error.
- **Versión afectada:** por ejemplo, `2.0.69`.
- **Dispositivo:** modelo y versión de Android.
- **Frecuencia:** cuántos usuarios experimentan el problema.
- **Tendencias:** si el error comenzó después de publicar una nueva versión.

Esto te permite investigar y corregir errores que ocurren en producción.

### Ejemplo con Kotlin

Supongamos que tienes este código:

```kotlin
val name: String? = null

Text(text = name!!)
```

El operador `!!` fuerza a Kotlin a tratar el valor como no nulo. Como `name` es `null`, se produce una excepción.

Si Crashlytics está configurado, puede registrar el fallo y ayudarte a localizarlo.

**Importante:** Crashlytics no evita automáticamente los errores. Te ayuda a detectarlos, comprenderlos y priorizar su corrección.

### ¿Funciona con React Native?

Sí. Puedes integrarlo en aplicaciones desarrolladas con React Native mediante el ecosistema de Firebase.

También se utiliza en aplicaciones nativas de Android e iOS.

Si trabajas con Kotlin y Jetpack Compose, puedes integrarlo en tu aplicación Android.

Documentación oficial: [Firebase Crashlytics](https://firebase.google.com/docs/crashlytics?utm_source=chatgpt.com)

---

# 2. ¿Qué es OIDC?

OIDC significa **OpenID Connect**. Es un protocolo de autenticación construido sobre OAuth 2.0.

Su objetivo principal es permitir que una aplicación compruebe la identidad de un usuario mediante un proveedor de identidad.

Por ejemplo:

- Iniciar sesión con Google.
- Iniciar sesión con Microsoft.
- Autenticarse mediante Auth0 o Keycloak.
- Acceder a aplicaciones empresariales con una identidad centralizada.

### ¿Cómo funciona?

Imagina que desarrollas una aplicación móvil con Kotlin y un backend en Go.

El flujo simplificado sería:

1. El usuario abre tu aplicación.
2. Pulsa **Iniciar sesión con Google**.
3. La aplicación inicia el proceso de autenticación con el proveedor de identidad.
4. El usuario se autentica.
5. El proveedor devuelve los resultados de autenticación mediante el flujo configurado.
6. La aplicación obtiene un ID Token.
7. Tu aplicación o backend valida la identidad según la arquitectura implementada.

El ID Token contiene información sobre la autenticación y la identidad del usuario, como su identificador único (`sub`).

### ¿Qué diferencia hay entre OAuth 2.0 y OIDC?

Esta distinción es importante en una entrevista técnica.

| Concepto              | OAuth 2.0                      | OpenID Connect                    |
| --------------------- | ------------------------------ | --------------------------------- |
| Objetivo principal    | Autorización                   | Autenticación                     |
| Pregunta que responde | ¿A qué recursos puede acceder? | ¿Quién es el usuario?             |
| Token característico  | Access Token                   | ID Token                          |
| Uso habitual          | Acceder a una API              | Iniciar sesión                    |
| Relación              | Protocolo de autorización      | Capa de identidad sobre OAuth 2.0 |

Por ejemplo, si tu aplicación necesita acceder a una API protegida, puede utilizar un Access Token.

Si necesita verificar la identidad del usuario que acaba de iniciar sesión, OIDC incorpora el ID Token para ese propósito.

**Importante:** un ID Token no sustituye al Access Token para acceder a una API. Cada uno tiene una finalidad diferente.

Documentación oficial: [OpenID Connect](https://openid.net/developers/how-connect-works/?utm_source=chatgpt.com)

---

# 3. ¿Qué relación tienen con Auth0, Clerk y Google OAuth?

Como estás aprendiendo desarrollo móvil y tienes interés en las integraciones de autenticación, conviene distinguir los conceptos de las herramientas.

| Tecnología           | ¿Qué es?                    | ¿Para qué sirve?                                                     |
| -------------------- | --------------------------- | -------------------------------------------------------------------- |
| Firebase Crashlytics | Herramienta de diagnóstico  | Registrar y analizar errores en producción.                          |
| OAuth 2.0            | Protocolo                   | Autorizar el acceso a recursos.                                      |
| OpenID Connect       | Protocolo de identidad      | Autenticar usuarios.                                                 |
| Google Identity      | Servicio de identidad       | Permitir autenticación mediante cuentas de Google.                   |
| Auth0                | Plataforma de identidad     | Gestionar autenticación, autorización e integración con proveedores. |
| Clerk                | Plataforma de autenticación | Implementar inicio de sesión y gestión de usuarios.                  |

Auth0 y Clerk pueden utilizar OIDC para implementar flujos de autenticación, aunque sus características y sus integraciones concretas varían.

No necesitas desarrollar tu propio protocolo de autenticación: normalmente integras un proveedor que implementa los estándares correspondientes.

---

# 4. ¿Qué deberías aprender para esa oferta?

La publicación no exige dominar todas estas tecnologías. Dice que las valoran, por lo que son conocimientos adicionales que pueden fortalecer tu candidatura.

Te recomendaría este orden:

| Prioridad | Tecnología o conocimiento | Qué deberías saber hacer                                                       |
| --------- | ------------------------- | ------------------------------------------------------------------------------ |
| 1         | APIs REST                 | Consumir endpoints, gestionar respuestas y manejar errores HTTP.               |
| 2         | Autenticación móvil       | Implementar inicio de sesión y gestionar sesiones y tokens de forma segura.    |
| 3         | Firebase Crashlytics      | Integrar la herramienta, provocar un error de prueba y analizar su reporte.    |
| 4         | Push Notifications        | Implementar notificaciones mediante Firebase Cloud Messaging (FCM).            |
| 5         | OAuth 2.0 y OIDC          | Entender los flujos de autenticación, los tokens y la validación de identidad. |
| 6         | CI/CD                     | Automatizar pruebas y builds y comprender la publicación de aplicaciones.      |
| 7         | AWS y Docker              | Entender el despliegue y la infraestructura que utiliza el backend.            |

## Mi recomendación para ti

Ya que estás trabajando con Kotlin y Jetpack Compose, puedes practicar Crashlytics directamente en una aplicación Android.

Para OIDC, lo ideal es implementar un inicio de sesión con un proveedor como Auth0 y comprender cómo se comunica la aplicación móvil con el proveedor y con tu backend.

No necesitas aprenderlos todos a profundidad antes de postularte. La oferta también valora JavaScript/TypeScript, React Native o Flutter, APIs REST, Node.js o Python y experiencia publicando aplicaciones.

**En resumen:**

- **Crashlytics:** te ayuda a descubrir por qué falla una aplicación después de publicarla.
- **OIDC:** permite que una aplicación autentique usuarios mediante un proveedor de identidad.
- **OAuth 2.0:** permite autorizar el acceso a recursos protegidos.

Son conceptos diferentes, pero ambos son relevantes para desarrollar aplicaciones móviles fiables y seguras.
