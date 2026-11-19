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
- 🟡 Kotlin/Android nativo: Call Project documenta una app Android con Kotlin y Jetpack Compose, FCM y SSE; ya no corresponde describir la base como «0 experiencia». Validar profundidad, pruebas y decisiones técnicas en ese proyecto. App Publisher acredita tooling y publicación, no años de desarrollo nativo ni dominio de arquitectura/performance.

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
- 🟡 Kotlin y Jetpack Compose: hay implementación documentada en Call Project; demostrar manejo de estado, recomposición, permisos, lifecycle y debugging nativo.
- ⏳ Coroutines y Flow: concurrencia estructurada, cancelación, manejo de errores y flujos de estado/datos.
- ⏳ Clean Architecture, MVVM/MVI y modularización por features en una app Kotlin de referencia.
- ⏳ Inyección de dependencias: Dagger para el objetivo Rappi; Hilt o Koin para la oferta Coforge. Implementar scopes y dependencias testeables, sin asumir dominio de una herramienta por conocer otra.
- ⏳ Gradle avanzado: build logic, convention plugins y medición/optimización de tiempos de build; separarlo de compilar y firmar con el wrapper.
- ⏳ Performance Android: tiempo de arranque, Baseline Profiles, memoria y ANR; registrar mediciones antes/después.
- ⏳ Testing nativo: unit tests, pruebas de UI con Compose y screenshot testing; validar estados, errores y regresiones visuales.
- 🟡 FCM: implementación documentada en Call Project; demostrar notificaciones de mensajería, contadores no leídos y comportamiento con app abierta, en segundo plano y cerrada.
- ⏳ Audio Android: captura y reproducción con MediaRecorder/MediaPlayer o equivalentes, permisos y manejo del ciclo de vida.
- ⏳ Room para persistencia estructurada, historial de mensajes y recuperación de estado; se agrega a las alternativas de almacenamiento ya previstas.

### iOS / Swift

- 🟡 Publicar con Expo/EAS no acredita dominio nativo: practicar Xcode, certificates, provisioning profiles, Bundle Identifier, capabilities y CocoaPods.
- ⏳ Swift, SwiftUI y UIKit; TestFlight y App Store Connect con flujo nativo de firmas, versionado y revisión.
- ⏳ AVFoundation: cámara, fotos/video/audio y relaciones de aspecto; Vision/VisionKit para OCR y códigos QR/barras.
- ⏳ Swift Concurrency: `async/await`, actors y aislamiento de estado; GCD y URLSession background tasks para tareas y subidas confiables.
- ⏳ SQLite/Core Data/SwiftData y recuperación del estado de sesión.
- ⏳ Instruments para memoria, CPU y batería; XCTest/XCUITest.
- ⏳ APNs: configuración y entrega de push nativo iOS; coordinar payloads, apertura de conversación y contadores no leídos. La experiencia con Expo push no demuestra manejo directo de APNs.
- ⏳ Audio iOS con AVFoundation: grabación/reproducción de notas de voz, permisos, interrupciones y recuperación de la sesión.
- ⏳ SDKs distribuibles: XCFramework y Swift Package Manager; modularización con SPM y convivencia SwiftUI/UIKit. SVG/gráficos vectoriales como deseable.

### Android–iOS: lógica compartida y decisiones de plataforma

- ⏳ Kotlin Multiplatform (KMP): módulo de lógica compartida, interoperabilidad con Swift y límites de responsabilidades entre código compartido y nativo.
- ⏳ Portar una funcionalidad Android a iOS y revisar que el resultado sea idiomático en cada plataforma; no asumir que publicar React Native demuestra entrega nativa en Swift.
- ⏳ Comparar nativo, KMP y Server-Driven UI (SDUI) con un ADR: requisitos, experiencia de usuario, mantenibilidad y costo/beneficio. SDUI es un enfoque a evaluar, no una tecnología ya usada.

### Ingeniería mobile asistida por agentes de IA

Base actual: uso documentado de Claude Code y desarrollo con IA. Esto no demuestra por sí solo orquestación de varios agentes, revisión técnica avanzada ni mejoras medidas de productividad.

- ⏳ Spec-driven development: definir problema, criterios de aceptación, plan y tareas pequeñas verificables antes de delegar.
- ⏳ Orquestación en paralelo: worktrees y sesiones aisladas para feature, tests, refactor y bugfix; delimitar archivos/responsabilidades, integrar resultados y resolver conflictos.
- ⏳ Revisión crítica: detectar errores de lógica/concurrencia, APIs inexistentes y sobreingeniería; ejecutar y comprender las pruebas del código generado.
- ⏳ Reglas de proyecto reutilizables: AGENTS.md / CLAUDE.md, comandos, skills y hooks; comprobar que otro ingeniero pueda reproducir el flujo.
- ⏳ MCP aplicado al squad: conectar y usar con permisos adecuados Jira, Figma, Crashlytics, GitHub y bases de datos. No hay evidencia documentada aquí de esas integraciones.
- ⏳ Agentes en CI y automatización de tareas, con revisión y controles de calidad antes de integrar cambios.
- ⏳ IA para unit tests, UI y screenshot tests: comprobar que detectan una regresión real, en vez de solo repetir la implementación.
- ⏳ Seguridad al delegar: no exponer secretos ni datos de usuarios; revisar dependencias y APIs sugeridas antes de incorporarlas.
- ⏳ Medir costo/beneficio: tiempo de entrega y retrabajo frente a estabilidad, mantenibilidad y costo de uso; decidir cuándo conviene resolver una tarea manualmente.
- ⏳ Triage con IA: partir de un crash, ANR o reporte; reproducir, plantear hipótesis, corregir y verificar sin aceptar automáticamente el diagnóstico del agente.

### Mensajería nativa y kits reutilizables — objetivo Coforge

Los conocimientos generales de REST, WebSockets, push y carga de imágenes aportan base; no hay evidencia documentada de un SDK de chat completo, audio nativo ni entrega de un kit Android/iOS reutilizable.

- ⏳ Integrar un SDK de mensajería y adaptar componentes, estados y navegación al design system de la aplicación consumidora. Stream Chat SDK para Compose/SwiftUI, u otro SDK empresarial, es un deseable específico de la oferta.
- ⏳ Conversaciones individuales y grupales: lectura/no leídos, edición y eliminación de mensajes, moderación y reportes.
- ⏳ Funciones fuera del SDK: reenvío, búsqueda de contenidos, contactos y administración de grupos.
- ⏳ Multimedia: imágenes, videos, documentos y notas de voz; compresión en el dispositivo, validación de tamaños/límites y manejo de fallos de carga.
- ⏳ Estados de conexión y reconexión, sincronización del historial, caché/offline y cola de envíos; demostrar reintentos sin duplicados mediante identificadores estables y deduplicación.
- ⏳ Coordinar REST/WebSockets con push: recuperar eventos perdidos y mantener mensajes y contadores consistentes. SSE en Call Project y WebSockets generales no equivalen a sincronización fiable de un chat.
- ⏳ Kit reutilizable: empaquetar una librería Android AAR y un Swift Package; versionar, documentar y distribuir mediante Nexus Repository o GitHub Packages según el artefacto y el repositorio elegido.
- ⏳ Integrar el kit en una segunda app de ejemplo para verificar contrato público, personalización y diferencias por perfil de usuario; preparar compatibilidad y actualizaciones.
- ⏳ Design systems y theming: adaptar identidad visual sin acoplar el kit a una sola app. Añadir accesibilidad Android/iOS y pruebas con lectores de pantalla, escalado de texto y contraste.
- ⏳ Localización: probar varios idiomas, países y perfiles de usuario en la app/kit. Es una competencia de producto; no requiere volver a traducir esta web o CV.
- ⏳ Observabilidad del chat: eventos y errores de conexión/envío/sincronización, métricas de calidad y diagnóstico sin registrar contenido privado de mensajes.
- ⏳ Colaboración con SRE: CI/CD y pruebas automatizadas del kit y sus apps consumidoras; integrar monitoreo y criterios de calidad.
- 🟡 IA en el entorno nativo: ya hay uso de asistentes; demostrar su integración en Android Studio y Xcode, junto con revisión de código, documentación y pruebas. Las prácticas de agentes de la sección anterior cubren los controles generales.

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
| Coforge — Mobile Developer Android & iOS, #20790-5-3 | Kotlin/Compose y FCM documentados en Call Project; REST, WebSockets, publicación en tiendas y uso de IA. | Hilt/Koin, audio nativo, APNs, chat offline sin duplicados, kit reutilizable, publicación de librerías y accesibilidad. También exige los pendientes existentes de Swift, KMP y testing nativo; más de 4 años de móvil nativo. |
| Rappi — Senior Software Engineer Android II, texto compartido el 20/11/2026 | Kotlin/Compose en Call Project; RN publicado, APIs, Git, automatización y uso de IA. | Android e iOS nativos avanzados, Dagger, Coroutines/Flow, MVI, build logic, performance, tests nativos, Jenkins, KMP/SDUI y orquestación de agentes. Pide 8+ años en roles similares, universidad completa e inglés intermedio–avanzado. |
| Coderio Senior RN/Kotlin — referencia anterior | RN en producción, REST, push y cloud general. | +3 años Kotlin comprobables, migración brownfield, IoT y código de referencia; inglés avanzado. |

Los apuntes de MUCK, Yanniris y Coderio conservan el análisis de ofertas anteriores: no hay archivos equivalentes en `../jobs/` en esta revisión. No se presentan como vacantes vigentes.

### Rappi — brechas específicas y filtros de la vacante

Referencia: texto de **Senior Software Engineer Android II** aportado el **20/11/2026**, para Bogotá/Lima. Se conserva como análisis del texto recibido; no se verificó su vigencia en línea. El foco es entregar producto mobile nativo con agentes de código, no desarrollar modelos de IA.

**Filtros que se evalúan por separado del estudio técnico:**

- 🟡 8+ años en roles similares: revisar historial real. Desarrollar web desde 2020 o usar IA no acredita ese requisito de experiencia similar.
- 🟡 Universidad completa; postgrado deseable. La formación actualmente documentada es técnica/bootcamp: confirmar si existe un título universitario adicional; no presentarlo como cumplido sin evidencia.
- 🟡 Inglés intermedio–avanzado: comprobar conversación técnica, explicación de decisiones y comunicación de resultados.
- 🟡 Startups tech, e-commerce o marketplaces; squads ágiles y remote-first son deseables. Preparar ejemplos verificables; trabajar freelance no equivale automáticamente a operar dentro de un squad de ese tipo.

**Evidencias técnicas que faltan para esta oferta:**

- ⏳ Android nativo avanzado: aplicar los pendientes de Kotlin, Compose, arquitectura, Dagger, Gradle, performance y testing de la sección 3 a una funcionalidad concreta.
- ⏳ Entrega iOS nativa: Swift/Swift Concurrency, SwiftUI/UIKit, SPM, Xcode/Instruments, firma y distribución. La publicación previa con EAS aporta contexto, pero no sustituye esta evidencia.
- ⏳ CI/CD con Jenkins: build, tests y quality gates de Android/iOS; prácticas existentes en GitHub Actions no demuestran dominio de Jenkins.
- ⏳ Paridad funcional Android–iOS y criterio para KMP/SDUI: implementar una parte en ambas plataformas y documentar diferencias, reutilización y límites.
- ⏳ Orquestación de agentes reproducible por el squad, con especificación, revisión crítica, MCP, comandos/skills/hooks y controles de seguridad según la sección 3.
- ⏳ Control de calidad medible: comprobar que el mayor throughput no aumente crashes, ANR, tiempo de arranque, consumo de memoria ni deuda técnica. Definir una línea base, pruebas y criterios de aprobación en CI.

**Responsabilidad senior y trabajo de equipo:**

- ⏳ Code reviews, coaching y feedback: preparar ejemplos de defectos detectados y mejoras compartidas con otros desarrolladores.
- ⏳ Priorización y ejecución: explicar cómo se descompone una iniciativa, se gestionan dependencias y se verifica el impacto del producto.
- ⏳ Coordinación entre áreas, rituales de squad y comunicación remota; documentar cómo se resuelve un bloqueo fuera del equipo.
- ⏳ Reportar progreso y resultados al liderazgo con métricas de entrega y calidad. Demostrar ownership, colaboración, juicio crítico y aprendizaje, sin atribuirse experiencia de liderazgo solo por dirigir agentes.

**Práctica de referencia para cerrar brechas:** escoger una funcionalidad acotada de Call Project; definir su especificación y pruebas; trabajar implementación, pruebas y revisión en entornos aislados; integrar sin conflictos; medir Android; portar la lógica a iOS o a un módulo KMP y registrar qué se comparte. Cerrar con una ejecución de CI y un informe de resultados. Este ejercicio aporta evidencia técnica, no sustituye los años ni la formación exigidos.

### Coforge — Mobile Developer Android & iOS (#20790-5-3)

Referencia: texto compartido el **20/11/2026**, con fecha de publicación **19/11/2026**, Perú y modalidad remota. El cuerpo menciona Coforge y el formulario Encora: confirmar la entidad contratante al postular. Se analiza el contenido recibido sin verificar la vigencia en línea ni crear archivos en jobs.

**Indispensables pendientes o parciales:**

- 🟡 Más de 4 años de desarrollo móvil **nativo**: validar fechas reales por plataforma; no sumar automáticamente experiencia web, React Native o tooling como años de Kotlin/Swift.
- ⏳ Cerrar los pendientes ya registrados de Coroutines/Flow, MVVM/MVI, Hilt/Koin, Swift/SwiftUI, async/await, KMP y pruebas unitarias/UI en Android e iOS; no duplicar sus checklists.
- 🟡 FCM, REST, WebSockets y publicación tienen antecedentes. La brecha es demostrar su integración en mensajería nativa, incluyendo conexión, reconexión y sincronización.
- ⏳ Audio Android/iOS, APNs, accesibilidad y optimización de rendimiento en una implementación verificable.
- ⏳ Empaquetado y publicación de librerías en Nexus Repository o GitHub Packages, y flujo de IA validado dentro de Android Studio/Xcode.

**Deseables a practicar:** Stream Chat u otro SDK empresarial, AAR/Swift Package, design system/theming, compresión de imagen/video en dispositivo, Room/Core Data/SwiftData, estrategias de caché/offline y producto multi-país/idioma/perfil.

**Evidencia de cierre:** construir una pequeña app de chat Android y otra iOS que consuman el kit; demostrar conversación individual/grupal, nota de voz, push y no leídos, lectura, reenvío y reconexión. Enviar mensajes sin conexión y reintentar sin duplicados; automatizar pruebas de esos casos y verificar personalización/accesibilidad. Publicar una versión de la librería y consumirla desde una segunda app, dejando trazabilidad de errores y métricas con apoyo de SRE. Esta práctica no sustituye el requisito de años de experiencia.

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
6. Para el objetivo Rappi: Kotlin/Coroutines/Flow + Compose y arquitectura modular → pruebas nativas y mediciones → Jenkins con quality gates → entrega Swift/KMP. Practicar especificación y revisión de agentes desde el inicio, y orquestación paralela cuando exista una base verificable.
7. Registrar evidencia de code review, priorización, colaboración y resultados del squad; evaluar aparte los filtros de años, formación e inglés.
8. Para el objetivo Coforge: base nativa y DI → chat con SDK → persistencia y reconexión sin duplicados → audio/push Android–iOS → kit versionado y publicado → pruebas, accesibilidad y monitoreo con SRE. Consultar la ruta de mensajería de la sección 3.

Consolidado de `mobile-roadmap-levels.md`, `mobile-roadmap-muck-ssr-sr.md`, `mobile-roadmap-semi-senior.md`, `mobile-roadmap-senior.md`, `mobile-roadmap-synopsis.md` y `mobile-roadmap-tutoriales.md`. Los archivos de `../jobs/` se mantienen intactos.
