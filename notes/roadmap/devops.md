# Roadmap DevOps

Consolidación de los roadmaps anteriores y de las ofertas guardadas en `../jobs/`. Es una guía personal; los niveles organizan el aprendizaje, no certifican seniority.

**Estados:** ✅ experiencia documentada · 🟡 cobertura parcial o pendiente de validar · ⏳ pendiente de practicar/demostrar.

No convertir requisitos de una oferta en experiencia propia. Los años de experiencia, certificaciones e inglés se validan por separado.

## 1. Base actual

| Estado | Competencia | Evidencia de los documentos existentes |
| --- | --- | --- |
| ✅ | Linux, Git y Bash | VPS Linux; scripts de deploy con build, migraciones, estáticos y healthcheck. |
| ✅ | Docker, Compose y Nginx | Contenedores en producción y reverse proxy. |
| ✅ | AWS EC2, RDS, S3 e IAM | Transpaservic y Briela Sin Fronteras. |
| ✅ | Terraform | Módulos reutilizables, variables y entornos dev/prod con state independiente. |
| ✅ | Serverless | Monitor de Disponibilidad Web: Lambda, EventBridge, API Gateway, DynamoDB y CloudWatch Logs. |
| ✅ | Backups y exposición de servicios | Backups a S3 por entorno; Cloudflare Tunnel sin puertos entrantes abiertos. |
| 🟡 | Secretos | Parameter Store figura como usado en el roadmap por niveles, pero pendiente en el anterior: validar implementación. Credenciales fuera de Git sí documentadas. |
| 🟡 | CI/CD | GitHub Actions para sincronizar OpenAPI/Swagger. App Publisher implementa generación de workflows de build, firma y publicación Android; falta registrar evidencia de ejecuciones reales. |
| 🟡 | Observabilidad | Logs en CloudWatch y monitor propio de disponibilidad; alarmas, métricas y tracing avanzado pendientes. |

## 2. Progresión por nivel

### Junior — fundamentos y repaso

- ✅ Linux, Bash, Git, Docker, permisos IAM básicos y logs.
- ✅ AWS: EC2, S3, RDS, Lambda, API Gateway y DynamoDB según los proyectos documentados.
- 🟡 Repasar vocabulario y funcionamiento de Docker en este orden: Image → Container → Dockerfile → Network → Volume → Compose → Registry → Environment variables → Secrets → Docker Context.

### Mid / Semi Senior — cerrar brechas operativas

- ✅ Terraform modular, Docker/Compose en producción, reverse proxy, backups y separación dev/prod.
- ⏳ VPC propia: subnets públicas/privadas, route tables, Internet Gateway y NAT Gateway; base de datos privada sin IP pública; Security Groups e IAM de mínimo privilegio.
- 🟡 Pipeline completo: build + test + deploy, healthcheck, rollback y trazabilidad. Aprovechar App Publisher para la parte mobile; demostrar por separado el pipeline de infraestructura/backend.
- ⏳ Secretos: AWS Secrets Manager, rotación y permisos; verificar Parameter Store; Ansible Vault para cifrar `group_vars/all.yml`.
- ⏳ CloudWatch Alarms y métricas accionables; healthcheck externo contra `/ping` (UptimeRobot / Better Uptime como referencias de los apuntes).
- ⏳ Billing alerts y revisión de costos.

### Senior — confiabilidad y operación a escala

- ⏳ Alta disponibilidad: Application Load Balancer, Auto Scaling Groups y multi-AZ. Empezar con min=max=1 para entender ASG; usar 2+ instancias para practicar rolling updates y disponibilidad.
- ⏳ Orquestación: ECS o Kubernetes/EKS; `kubectl`, Helm charts, workloads, configuración y despliegues. Docker Swarm queda como alternativa de laboratorio.
- ⏳ Deploy sin downtime: blue-green y rolling updates con healthchecks y rollback.
- ⏳ GitOps: ArgoCD y despliegues declarativos.
- ⏳ Observabilidad: Prometheus/Grafana, ELK o Loki, Dynatrace y tracing distribuido.
- ⏳ SRE: SLI, SLO, SLA, telemetría, respuesta a incidentes y confiabilidad.
- ⏳ DevSecOps: análisis de código con SonarQube, auditoría, cambios controlados y evidencias de remediación.
- ⏳ Gestión de configuración con Ansible más allá de Vault.
- ⏳ Optimización de costos, diseño de arquitectura, ADRs, code reviews y mentoría.
- ⏳ Multi-cloud según la oferta objetivo: Azure o GCP después de consolidar AWS.

## 3. Especializaciones según las ofertas

### AWS y plataforma — Kashio / Metrica–Kyndryl BCP

Referencias: [Kashio](../jobs/devops-engineer-kashio.md) y [Lucy Aldave](../jobs/devops-lucy-aldave.md).

- ⏳ EKS/ECS, SQS, Helm y Kubernetes, sobre la base AWS ya documentada.
- ⏳ CloudFormation como alternativa a Terraform; módulos, variables y versionado de IaC.
- ⏳ Bitbucket Pipelines, GitLab CI o Jenkins cuando sean requeridos; GitHub Actions es la base actual.
- ⏳ Atlassian: Jira, Confluence y Bitbucket; preparar ejemplos reales de colaboración y trazabilidad.
- ⏳ CloudTrail, KMS, GuardDuty y Security Hub; Redshift si se apunta al rol AWS de Metrica.
- 🟡 Bash y Node.js ya tienen ejemplos; Python/Java operativos deben demostrarse según el puesto.
- ⏳ Preparar casos de entrevista: reto de IaC, automatización, monitoreo, disponibilidad y colaboración con Seguridad/Producto.
- 🟡 Kashio pide 3 años en AWS, IaC, Atlassian y DevOps, además de inglés técnico intermedio–avanzado. Validar fechas reales; no deducir duración a partir de una lista de proyectos.

### Azure, integración y seguridad de APIs — Synopsis

Referencias: [DevOps: pendientes](../jobs/devops-engineer-synopsis.pendientes.md) y [Especialista Cloud](../jobs/devops-synopsys-especialista.md).

- ⏳ Azure DevOps Pipelines YAML.
- ⏳ Azure API Management: inventario, extracción de configuración, políticas y remediación de hallazgos.
- ⏳ Azure CLI, PowerShell o Python para automatizar inventario y cambios.
- ⏳ Azure Key Vault; Azure Container Registry, Container Instances o AKS.
- 🟡 OAuth 2.0 y JWT tienen antecedentes; profundizar OIDC, TLS/mTLS, certificados, CORS, rate limiting y filtrado IP en APIs/APIM.
- ⏳ OWASP API Security Top 10, validación después de cambios, documentación de evidencias y coordinación con Ciberseguridad/Operaciones.
- ⏳ Bicep o CDK si el puesto lo requiere; Terraform ya tiene experiencia documentada.
- ⏳ Certificación DevOps/DevSecOps o Azure/AWS según objetivo. AWS Solutions Architect – Associate se conserva como ruta de estudio pendiente, no certificación obtenida.
- 🟡 El puesto APIM exige 3 años en Cloud/Integración/DevOps y 2 en APIM. No hay experiencia Azure documentada en los roadmaps de origen; un laboratorio no sustituye ese requisito.

### GCP — exploración posterior

- ⏳ Cloud Functions, Pub/Sub, Cloud Storage y Cloud Scheduler.
- ⏳ Construir un equivalente pequeño del monitor serverless para comparar con AWS.
- No presentar esta lista de servicios como experiencia adquirida: los apuntes originales no adjuntan evidencia de implementación.

## 4. Orden de ejecución y evidencia

1. **VPC real:** Terraform con subnets públicas/privadas, rutas y DB privada. Evidencia: diagrama, código y prueba de conectividad.
2. **CI/CD completo:** build, tests, despliegue, healthcheck y rollback. Evidencia: ejecución exitosa y recuperación de un despliegue fallido.
3. **Secretos, alarmas y costos:** probar permisos, alarma y recuperación; registrar el procedimiento sin credenciales.
4. **Blue-green:** nuevo contenedor en puerto/nombre temporal → healthcheck → cambio de `proxy_pass` en Nginx → retirar anterior. Hoy los apuntes registran cortes con el reemplazo por Compose.
5. **Orquestación y alta disponibilidad:** ECS o EKS, ALB y rolling update de una instancia a la vez.
6. **Observabilidad y SRE:** dashboard, alertas, SLI/SLO y un ejercicio de incidente.
7. **Especialización laboral:** Azure/APIM para Synopsis; EKS/GitOps/Atlassian para Kashio; seguridad AWS para Metrica. GCP queda como expansión.

## 5. Mantenimiento

- Cambiar ⏳ a ✅ solo con ejemplo verificable, repositorio o evidencia de ejecución.
- Registrar qué se implementó, en qué proyecto y qué falta para operarlo en producción.
- El nuevo App Publisher reduce el gap de automatización mobile; no demuestra por sí solo HA, Kubernetes, Azure ni CI/CD completo de backend.
- Consolidado de `devops-roadmap.md` y `devops-roadmap-levels.md`. Las ofertas de `../jobs/` se usan como contexto y se mantienen intactas.
