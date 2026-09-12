<!-- Java — Roadmap por nivel (Junior / Mid / Senior) -->
<!-- Material para enseñarle Java a Ivana Barreto. Punto de partida: ya sabe
     programar en otro lenguaje, nunca tocó Java — por eso el nivel Junior
     arranca directo en sintaxis/POO de Java, sin lógica de programación
     básica desde cero (variables, condicionales, loops ya los entiende
     conceptualmente, cambia la sintaxis nomás).
     Todo empieza en ⏳ — a medida que vaya viendo cada tema, cambiarlo a ✅
     para que sea fácil ver de un vistazo qué falta en cada nivel. -->

## Junior

### Sintaxis y fundamentos de Java
⏳ Tipos de datos, variables, operadores
⏳ Control de flujo (if/else, switch, loops) — sintaxis Java específica
⏳ Arrays y Strings
⏳ POO: clases, objetos, constructores
⏳ POO: herencia, interfaces, polimorfismo
⏳ Manejo de excepciones (try/catch, checked vs unchecked)
⏳ Colecciones (List, Map, Set)
⏳ Streams y expresiones lambda (Java 8+)

### Herramientas básicas
⏳ Maven o Gradle (gestión de dependencias y build)
⏳ Git (si ya lo usa en otro lenguaje, es solo repasar comandos)

### Persistencia básica
⏳ SQL básico (SELECT, JOIN, INSERT/UPDATE/DELETE)
⏳ JDBC — cómo Java se conecta a una base de datos

### Spring Boot — primeros pasos
⏳ Qué es la inyección de dependencias (@Component, @Service, @Repository)
⏳ Crear un controlador REST simple (@RestController, @GetMapping, @PostMapping)
⏳ Spring Data JPA — CRUD básico contra una base de datos relacional

### Testing básico
⏳ JUnit 5 — escribir un test simple

---

## Mid (Semi Senior)

### Spring Boot intermedio
⏳ Validaciones (@Valid, Bean Validation)
⏳ Manejo global de excepciones (@ControllerAdvice)
⏳ application.properties / application.yml — configuración por entorno
⏳ Spring Security básico

### Autenticación y seguridad
⏳ JWT
⏳ OAuth 2.0

### Testing intermedio
⏳ Mockito (mocks para tests unitarios)
⏳ Tests de integración con @SpringBootTest
⏳ Diferencia entre test unitario y de integración

### Bases de datos
⏳ Relaciones más complejas en JPA (@OneToMany, @ManyToMany)
⏳ Migraciones de base de datos (Flyway o Liquibase)
⏳ Redis básico (caché)

### APIs
⏳ Buenas prácticas REST (versionado, códigos HTTP correctos)
⏳ Documentación con Swagger/OpenAPI

### Contenedores y CI/CD básico
⏳ Docker — Dockerfile para una app Spring Boot
⏳ Docker Compose (app + base de datos juntos)
⏳ CI/CD básico (GitHub Actions)

### Buenas prácticas
⏳ Patrones de diseño comunes (Singleton, Builder, Factory)
⏳ Clean Code aplicado a Java

---

## Senior

### Microservicios
⏳ Comunicación entre microservicios (REST clients, Feign)
⏳ API Gateway / Spring Cloud Gateway
⏳ Resiliencia: Resilience4j (circuit breaker, retry, rate limiting)

### Mensajería y eventos
⏳ Kafka
⏳ RabbitMQ
⏳ Arquitectura orientada a eventos (conceptos generales)

### Arquitectura avanzada
⏳ Domain Driven Design (DDD)
⏳ Arquitectura Hexagonal / Clean Architecture
⏳ TDD (Test Driven Development)

### Testing avanzado
⏳ Testcontainers (tests de integración contra dependencias reales)
⏳ JaCoCo (cobertura de código)
⏳ SonarQube (calidad de código)

### Cloud y observabilidad
⏳ Kubernetes
⏳ Terraform (infraestructura como código)
⏳ Logging estructurado y métricas
⏳ Herramientas de monitoreo (Dynatrace, ELK, Prometheus)

### Liderazgo técnico
⏳ Code reviews
⏳ Documentar decisiones de arquitectura (ADRs)
⏳ Mentoría a desarrolladores junior/mid

<!-- Nota: este roadmap es una guía de progresión típica de mercado (Junior→Mid→
     Senior), no hace falta dominar el 100% de un nivel para pasar al siguiente
     ni aprender en orden estricto — es más útil como checklist de referencia
     para saber qué falta ver. -->
