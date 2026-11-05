# Roadmap Mobile

Consolidación de los seis roadmaps mobile y de las ofertas guardadas en `../jobs/`. Reúne la evaluación personal, la progresión para enseñar a Ivana y la preparación de tutoriales, con estados independientes.

**Evaluación personal:** ✅ experiencia documentada · 🟡 parcial o por validar · ⏳ pendiente.
**Docencia:** conocer un tema no significa tener preparada una clase; el avance del estudiante se confirma por separado.

## 1. Base personal y correcciones de los apuntes

- ✅ React Native, TypeScript, componentes funcionales, hooks, estilos y React Navigation (v7 registrado en los apuntes de MUCK).
- ✅ Redux Toolkit, Zustand y Context API. Se corrige el estado pendiente de archivos antiguos: los documentos posteriores los registran en Mix&Match y Transpaservic.
- ✅ Integración REST; TanStack Query para datos asíncronos y caché. El ejemplo documentado del dashboard no demuestra por sí solo su uso en la app móvil.
- ✅ OAuth Google/Apple, JWT y tokens en Keychain/Keystore mediante `expo-secure-store` en Mix&Match.
- ✅ Push notifications, cámara/imágenes e integración de subida a S3; WebSockets y WhatsApp API en el sistema Transpaservic.
- ✅ Expo, EAS Build y EAS Update; publicación Android de Mix&Match y Transpaservic, e iOS de Mix&Match; builds iOS con instancia macOS en Scaleway.
- ✅ Jest; Supertest corresponde a pruebas de backend. React Native Testing Library y E2E mobile siguen pendientes de demostrar.
- ✅ Git y uso documentado de Claude Code en el flujo de desarrollo; Scrum registrado en los apuntes.
- 🟡 App Publisher: CLI Go con Gradle, incremento de `versionCode`, Google Play Developer API, workflows de GitHub Actions y plugin de firma Expo. Implementación revisada en el proyecto; validar ejecuciones reales antes de marcar todo el CI/CD mobile como dominado.
- 🟡 Kotlin/Android nativo: las notas antiguas dicen «0 experiencia»; App Publisher acredita tooling de Android, no años de desarrollo de apps nativas. Evaluar con un proyecto Kotlin/Jetpack concreto.

## 2. Roadmap técnico personal

### Junior — fundamentos y herramientas

- ✅ Setup Expo, componentes/props, `useState`, `useEffect`, StyleSheet/Flexbox y navegación Stack/Tabs.
- 🟡 Repasar FlatList/ScrollView, imágenes/assets, Fetch/Axios y debugging básico con ejemplos reproducibles.
- 🟡 Preparar ejercicios de TypeScript: props, interfaces, genéricos en hooks y componentes.
- ✅ Git, consumo REST y manejo de errores básico según la experiencia documentada.

### Mid / Semi Senior — calidad y autonomía

- ✅ Estado global, autenticación y publicación con las herramientas de la base actual.
- 🟡 Persistencia: distinguir AsyncStorage para datos no sensibles de almacenamiento seguro de tokens; demostrar restauración de sesión.
- 🟡 Permisos de cámara, ubicación y notificaciones; profundizar geolocalización y comportamiento ante rechazo de permisos.
- ⏳ Refresh tokens explícitos, expiración y recuperación de sesión; OIDC, ID Token vs Access Token y validación de identidad.
- ⏳ React Native Testing Library y pruebas de integración de pantallas, navegación y autenticación.
- ⏳ Crashlytics o Sentry: fallo de prueba, análisis de stack trace, versión/dispositivo afectado y seguimiento de corrección. Datadog es una alternativa mencionada en las ofertas.
- ⏳ Clean Architecture/MVVM aplicado y documentado en mobile; módulos desacoplados. SOLID en backend no acredita arquitectura mobile.
- 🟡 Performance: documentar mediciones de renders, listas, memoria, CPU y batería; evitar marcarlo como demostrado solo por práctica informal.
- ⏳ Biometría, MFA y SDKs nativos adicionales.

### Senior — arquitectura, nativo y operación

- ⏳ New Architecture: Fabric/TurboModules; módulos nativos/bridges personalizados Android/iOS.
- ⏳ SQLite, Realm o MMKV; offline-first con caché local, colas de sincronización, reintentos y recuperación.
- ⏳ Monorepos: Turborepo, Nx o pnpm workspaces, según necesidad real.
- 🟡 CI/CD mobile: completar la evidencia de App Publisher y GitHub Actions; agregar tests, distribución de pruebas, rollback y trazabilidad.
- ⏳ Fastlane, Bitrise, CircleCI, Azure DevOps o Jenkins cuando los exija el proyecto; Firebase App Distribution.
- ⏳ E2E con Detox o Appium; seguridad OWASP Mobile Top 10/MASVS, hardening y cifrado local más allá de guardar tokens.
- ⏳ Apps de alta concurrencia: registrar métricas. Los +10.000 usuarios de Mix&Match no demuestran concurrencia ni escala enterprise fintech.
- ⏳ Code reviews, ADRs y mentoría con ejemplos concretos.

## 3. Rutas nativas y especializadas

### Android / Kotlin

- ✅ Signing configs según el roadmap original y el tooling de App Publisher.
- 🟡 Profundizar Gradle, Groovy/Kotlin DSL, firma y versionado; separar automatización de publicación de desarrollo nativo.
- ⏳ Flavors, build variants, ProGuard/R8, Android Manifest, intents, deep linking y lifecycle.
- ⏳ Kotlin, Android SDK, Jetpack Components, permisos, pruebas unitarias y debugging nativo.
- ⏳ MVVM/Clean Architecture en una app Kotlin de referencia.

### iOS / Swift

- 🟡 Publicar con Expo/EAS no acredita dominio nativo: practicar Xcode, certificates, provisioning profiles, Bundle Identifier, capabilities y CocoaPods.
- ⏳ Swift, SwiftUI y UIKit; TestFlight y App Store Connect con flujo nativo de firmas, versionado y revisión.
- ⏳ AVFoundation: cámara, fotos/video/audio y relaciones de aspecto; Vision/VisionKit para OCR y códigos QR/barras.
- ⏳ Concurrencia `async/await`, GCD y URLSession background tasks; subida confiable de archivos grandes.
- ⏳ SQLite/Core Data/SwiftData y recuperación del estado de sesión.
- ⏳ Instruments para memoria, CPU y batería; XCTest/XCUITest.
- ⏳ SDKs distribuibles: XCFramework y Swift Package Manager; SVG/gráficos vectoriales como deseable.

### IoT industrial / migración nativa → React Native

- ⏳ Migración brownfield/strangler fig de app Kotlin existente, con código de referencia.
- ⏳ AWS IoT Core, MQTT, Greengrass/edge y Cognito; resiliencia, baja latencia y eficiencia de batería.
- ⏳ Dominio SCADA/MES, OEE y KPIs de planta.
- Ruta especializada de la oferta Coderio: conservar como referencia, sin confundirla con experiencia React Native greenfield.

## 4. Cruce con propuestas laborales

| Oferta / referencia | Base relacionada | Brechas o filtros por validar |
| --- | --- | --- |
| [Mobile Fullstack SSr](../jobs/mobile-crashlytics.md) | RN/TS, REST, Node.js, OAuth, publicación y push. | Crashlytics, OIDC formal, arquitectura/persistencia y evidencia de resolución de errores; pide 3+ años de software con experiencia mobile. |
| [Synopsis Android Senior](../jobs/mobile-synopsys-kotlin-rn.md) | REST, Git, RN, AWS y tooling de publicación. | Kotlin, Android SDK/Jetpack, arquitectura y testing nativo; exige >5 años de software y >4 Android nativo. |
| [iOS Middle — Mundo Fernandez](../jobs/mobile-ios-fernandez-sac.md) | REST, OAuth/JWT, S3 y publicación iOS con EAS. | Swift/SwiftUI, cámara, OCR, background uploads, Instruments, SDK y testing nativo; exige 3+ años iOS nativo e inglés intermedio/avanzado. |
| [Synopsis Automatizador Junior](../jobs/mobile-synopsys-analista.md) | Git, REST y nociones CI/CD. | Ruta QA: Appium, Cucumber/Gherkin, casos de prueba, defectos, Postman, Jira/Xray, SQL Server/DB2; GCP e ISTQB deseables. |
| MUCK SSR/SR — referencia conservada del roadmap anterior | RN/TS, React Navigation, Redux/Context, OAuth/JWT, tokens seguros y Jest. | Clean Architecture, RNTL, Detox/Appium, crashes, nativo, biometría/MFA, fintech e inglés. Filtro histórico: SSR 2–3 años; SR 3–5. |
| React Native SSr — Yanniris Fuentes, referencia anterior | Estado global, Expo/EAS, REST, push/cámara, OAuth y desarrollo asistido. | New Architecture, performance medible, biometría/geolocalización; exige 3–5 años RN y 3+ apps en ambas tiendas; prioridad Venezuela. |
| Coderio Senior RN/Kotlin — referencia anterior | RN en producción, REST, push y cloud general. | +3 años Kotlin comprobables, migración brownfield, IoT y código de referencia; inglés avanzado. |

Los apuntes de MUCK, Yanniris y Coderio conservan el análisis de ofertas anteriores: no hay archivos equivalentes en `../jobs/` en esta revisión. No se presentan como vacantes vigentes.

### Requisitos deseables transversales

- ⏳ AWS Amplify aplicado a mobile, Cognito y AppSync; la experiencia Amplify web no acredita estos últimos.
- ⏳ Sectores regulados: banca, fintech, seguros o salud; experiencia en consultoras/software factories cuando sea filtro.
- 🟡 Inglés: lectura técnica y comunicación según la oferta; evaluar nivel real.
- 🟡 Recontar apps y años con fechas reales. Los apuntes anteriores registraban aproximadamente 1,5–2 años mobile, una app en ambas tiendas y otra solo Android; no actualizar esos años automáticamente ni convertirlos en evidencia de seniority.

## 5. Progresión para enseñar a Ivana

Guía del estudiante, independiente de los ✅ personales. Punto de partida registrado: React Native básico; todos los temas quedan por confirmar hasta ver ejercicios.

| Nivel | Temas | Estado del estudiante |
| --- | --- | --- |
| Junior | JSX, componentes, props, `useState`, estilos/Flexbox, navegación, FlatList/ScrollView, imágenes/assets. | ⏳ Confirmar con práctica. |
| Junior | Expo/Expo Go/`expo install`, Git, Fetch/Axios, `useEffect` y debugging. | ⏳ Confirmar con práctica. |
| Mid | TypeScript: props/interfaces y genéricos; Context API, TanStack Query y AsyncStorage. | ⏳ Pendiente. |
| Mid | OAuth Google/Apple, JWT, sesiones, permisos, cámara y push. | ⏳ Pendiente. |
| Mid | Jest, React Native Testing Library, EAS Build y publicación Android/iOS. | ⏳ Pendiente. |
| Senior | Clean Architecture/MVVM, Redux/Zustand/MobX, monorepos y offline-first. | ⏳ Pendiente. |
| Senior | Módulos nativos, performance, CI/CD, distribución de pruebas, crashes y MASVS. | ⏳ Pendiente. |
| Senior | Code review, ADRs y mentoría. | ⏳ Pendiente. |

El orden es orientativo: adaptar la progresión a los ejercicios, sin asumir dominio por haber explicado un tema.

## 6. Serie de tutoriales

| Módulo | Ejemplos disponibles | Preparación pendiente |
| --- | --- | --- |
| 1. Fundamentos | Expo, componentes, props, estilos y React Navigation. | ⏳ Progresión de TypeScript para quien viene de JavaScript. |
| 2. Datos y estado | REST; Context, Redux Toolkit y Zustand documentados; dashboard como referencia de TanStack Query. | ⏳ Preparar ejemplo móvil de caché; enseñar Context primero y comparar con Redux/Zustand. |
| 3. Autenticación | Google/Apple, JWT, sesiones y `expo-secure-store` en Mix&Match. | ⏳ Explicar almacenamiento seguro, expiración y refresh sin confundir implementación existente con curso listo. |
| 4. Funcionalidades de producción | Push, imágenes/S3, WebSockets y WhatsApp API; distinguir qué corresponde a app y qué al backend. | ⏳ Recortar ejemplos reproducibles sin datos de usuarios ni credenciales. |
| 5. Publicación | EAS Build/Update, Play Store/App Store; App Publisher para automatización Android. | ⏳ Documentar errores de revisión vividos y checklist; grabar una ejecución verificable del workflow. |
| 6. Proyecto integrador | Camino real de Mix&Match como referencia. | ⏳ Definir armario virtual simplificado u otra app publicable que integre módulos 1–5. |

## 7. Próximas evidencias

1. Integrar Crashlytics/Sentry y documentar un fallo de prueba y su diagnóstico.
2. Probar pantallas/autenticación con RNTL; agregar un flujo E2E.
3. Ejecutar y documentar un pipeline App Publisher de build, firma y publicación; sumar tests.
4. Documentar arquitectura mobile, refresh de sesión y permisos; medir una mejora de performance.
5. Desarrollar persistencia/offline y después elegir una especialización nativa según la oferta objetivo.

Consolidado de `mobile-roadmap-levels.md`, `mobile-roadmap-muck-ssr-sr.md`, `mobile-roadmap-semi-senior.md`, `mobile-roadmap-senior.md`, `mobile-roadmap-synopsis.md` y `mobile-roadmap-tutoriales.md`. Los archivos de `../jobs/` se mantienen intactos.
