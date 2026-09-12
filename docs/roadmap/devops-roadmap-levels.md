<!-- DevOps — Roadmap por nivel (Junior / Mid / Senior) -->
<!-- A diferencia de los roadmap de nivel de Java/Mobile (para enseñarle a
     Ivana desde cero), este es MI propio roadmap — ya tengo experiencia real
     en producción (ver assets/js/data.js: Briela, Transpaservic, Monitor de
     Disponibilidad Web), así que acá SÍ hay ✅ reales, no todo arranca en
     ⏳. Sirve para ver de un vistazo en qué nivel estoy parado realmente y
     qué me falta para el siguiente. Complementa a devops-roadmap.md (que
     tiene el detalle pendiente por categoría, no por nivel). -->

## Junior

✅ Linux — VPS Linux + Nginx en varios proyectos
✅ Bash scripting — scripts de deploy (git pull, build, migraciones, healthcheck)
✅ Git / control de versiones
✅ Docker — imágenes, contenedores, volúmenes, redes básicas
✅ CI/CD básico — GitHub Actions (sync de OpenAPI/Swagger en BPVentures)
✅ Cloud fundamentals (AWS) — IAM, EC2, S3, cuentas y permisos básicos
✅ Logs y monitoreo básico — CloudWatch Logs (Monitor de Disponibilidad Web)

---

## Mid (Semi Senior)

✅ IaC con Terraform — módulos reutilizables entre entornos dev/prod (Transpaservic, Briela)
✅ Docker en producción — Docker Compose + Nginx como reverse proxy
✅ Gestión de secretos básica — AWS Systems Manager (Parameter Store), tfvars sin exponer en git
✅ Backups automatizados — a S3 por entorno (Briela)
✅ Exposición segura de servicios — Cloudflare Tunnel, sin puertos entrantes abiertos
⏳ Redes reales (VPC no-default: subnets públicas/privadas, route tables, NAT gateway) — hoy uso la VPC default
⏳ CI/CD completo (build + test + deploy automático al mergear a main) — hoy tengo CI parcial (sync de docs), no un pipeline de deploy end-to-end
⏳ Gestión de secretos avanzada — AWS Secrets Manager, Ansible Vault
⏳ Observabilidad intermedia — CloudWatch Alarms (tengo logs, no alarmas configuradas)

---

## Senior

⏳ Alta disponibilidad — Application Load Balancer, Auto Scaling Group, multi-AZ
⏳ Orquestación de contenedores — Kubernetes, ECS o Docker Swarm (hoy un solo contenedor por servicio)
⏳ Deploy sin downtime — blue-green o rolling updates (hoy corta unos segundos en cada deploy)
⏳ Multi-cloud — Azure (Azure DevOps Pipelines, AKS, Key Vault) o GCP más allá de lo básico
⏳ Observabilidad avanzada — Prometheus/Grafana, ELK, Dynatrace, tracing distribuido
⏳ Gestión de costos — billing alerts, optimización de recursos
⏳ Seguridad avanzada / DevSecOps — certificación, auditorías, ciclo de desarrollo seguro (SonarQube)
⏳ Config management — Ansible más allá de Vault (provisioning completo)
⏳ Liderazgo técnico — diseño de arquitectura cloud, ADRs, mentoría

<!-- Camino sugerido para pasar de Mid a Senior: primero VPC real + CI/CD
     completo (quedan en Mid, son la base), después orquestación de
     contenedores + alta disponibilidad (el salto más grande de complejidad),
     recién ahí observabilidad avanzada y multi-cloud. Ver devops-roadmap.md
     para el detalle técnico de cada ítem. -->
