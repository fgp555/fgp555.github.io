<!-- Mobile React Native SSR/SR — MUCK Consultores -->
<!-- Origen: oferta publicada por Helen Benítez Velazquez (MUCK Consultores),
     "Desarrolladores React Native (SSR/SR)", proyecto enterprise, 100%
     remoto, horario México (CST), 10 meses con alta probabilidad de
     extensión. Enviar CV a helen.benitez@muck.cl -->
<!-- React Navigation y almacenamiento seguro de tokens (Keychain/Keystore)
     se verificaron directamente en los repos de referencia
     (E:\work\freelance\transpaservic\transpaservic-mobile y
     E:\claude\fullstack\fgp-mobile), no se asumieron — ya están agregados
     a data.js. -->

### Experiencia (filtro duro)
⏳ SSR: 2-3 años en desarrollo móvil — tengo ~2 años, en el límite inferior
⏳ SR: 3-5 años — no llego

### Arquitectura mobile
⏳ Clean Architecture aplicada específicamente a mobile (documentada) — tengo SOLID
   documentado del lado backend (NestJS), no una arquitectura por capas explícita en RN
⏳ Módulos desacoplados — no documentado explícitamente

### Seguridad móvil
⏳ OWASP Mobile Top 10 (formal, como práctica conocida)
🟡 Cifrado de datos en tránsito/reposo — tengo HTTPS/SSL (tránsito) y tokens en
   Keychain/Keystore vía expo-secure-store (Mix&Match), pero no cifrado de datos
   locales más allá de eso (ej. bases de datos locales cifradas)
⏳ Refresh Tokens — uso JWT pero no confirmé un flujo explícito de refresh token

### Testing
⏳ React Native Testing Library — tengo Jest + Supertest, RNTL no confirmado
⏳ Detox / Appium (deseable) — no

### DevOps mobile
⏳ CI/CD específico mobile (Bitrise, Azure DevOps, Jenkins) — tengo GitHub Actions general
⏳ Firebase Crashlytics / Sentry (monitoreo de crashes) — no

### Nativo
⏳ Conocimientos iOS/Android nativo (básico para SSR, intermedio para SR) — no

### Deseables
⏳ Sector Financiero / Fintech / Banca
⏳ Apps de alta concurrencia / gran volumen — Mix&Match llegó a +10,000 usuarios,
   parcialmente cubierto pero no es escala "enterprise fintech"
⏳ Biometría / MFA
✅ Metodologías ágiles (Scrum)
⏳ Inglés técnico (gap ya trackeado aparte)

<!-- Ya cubierto (verificado, no asumido) -->

✅ React Native (Hooks, Functional Components), TypeScript
✅ SOLID (documentado, aplicado del lado backend)
✅ Redux Toolkit / Context API
✅ React Navigation v6+ — confirmado v7 en ambos repos de referencia
✅ REST / OpenAPI 3.0, OAuth2, JWT
✅ Manejo seguro de tokens con Keychain/Keystore (expo-secure-store) — Mix&Match
✅ Jest
✅ Git, CI/CD (GitHub Actions)

<!-- Conclusión: técnicamente encajo mejor para SSR que para SR, y el filtro
     de años sigue siendo el obstáculo más duro (no se cierra con estudio).
     El resto de gaps (OWASP formal, Detox/Appium, CI/CD mobile específico,
     Crashlytics/Sentry, nativo básico) son agregables con práctica dirigida,
     no son un pivote grande. -->
