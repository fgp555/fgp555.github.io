<!-- Cloud -->

### AWS

Lambda
CloudWatch
S3
DynamoDB
API Gateway

### GCP

Cloud Functions
Pub/Sub
Cloud Storage
Cloud Scheduler


Para búsqueda laboral, yo priorizaría:
Image → Container → Dockerfile → Network → Volume → Compose → Registry → Environment variables → Secrets → Docker Context.

<!-- Cloud computing -- pendientes (2026-08-31) -->

### Redes (VPC de verdad, no la default)
⏳ Subnets públicas vs privadas
⏳ Route tables
⏳ NAT gateway
⏳ Mover la DB a subnet privada sin IP pública

### Gestión de secretos
⏳ AWS Secrets Manager
⏳ SSM Parameter Store
⏳ Ansible Vault (cifrar group_vars/all.yml en vez de solo gitignorarlo)

### CI/CD
⏳ GitHub Actions: build + deploy automático al mergear a main

### Alta disponibilidad / balanceo de carga
⏳ Application Load Balancer
⏳ Auto Scaling Group (min=max=1 para empezar, entender el modelo)

### Deploy sin downtime (hoy corta unos segundos en cada deploy: docker compose up -d para el contenedor viejo antes de levantar el nuevo)
⏳ Blue-green en el mismo servidor (contenedor nuevo en puerto/nombre temporal + healthcheck + swap del proxy_pass de nginx + bajar el viejo)
⏳ Rolling update con load balancer (depende de "Alta disponibilidad" de arriba: 2+ instancias, desplegar de a una)
⏳ Kubernetes/Docker Swarm rolling updates (solución "de fábrica", salto de complejidad grande)

### Observabilidad
⏳ CloudWatch Alarms
⏳ Healthcheck externo (UptimeRobot / Better Uptime) contra /ping

### Costos
⏳ Billing Alert en AWS

### Camino estructurado
⏳ AWS Certified Solutions Architect - Associate (cubre casi toda esta lista, en orden)