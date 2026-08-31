<!-- Vocabulario práctico armado el día que implementamos CI/CD de verdad
(fgp-backend + fgp-distributions + fgp-ansible + fgp-infra-dev), 2026-09-01.
Definiciones cortas, pensadas para responder en una entrevista, no para
memorizar de un libro. -->

### CI/CD

**CI (Continuous Integration / Integración Continua)** — probar automáticamente cada cambio (build + lint + tests) apenas se integra a la rama principal, para detectar errores el mismo día que se escriben, no semanas después.

**CD (Continuous Delivery/Deployment)** — llevar ese código ya probado hasta un servidor real, automáticamente. "Delivery" = queda listo para desplegar con un clic; "Deployment" = se despliega solo, sin clic.

**Pipeline** — la secuencia completa de pasos automatizados desde que hay un cambio de código hasta que queda corriendo (o listo para correr) en un servidor.

### GitHub Actions

**Workflow** — un archivo `.yml` en `.github/workflows/` que define qué se corre y cuándo (ej. `ci.yml`, `deploy.yml`).

**Runner** — la máquina (VM temporal) donde corre el workflow. `ubuntu-latest` = una VM Ubuntu que GitHub prende, usa, y destruye al terminar — no es tu servidor ni tu máquina local.

**Job / Step** — un workflow tiene uno o más *jobs* (ej. `lint-and-test`, `deploy`); cada job tiene *steps* en orden (checkout, instalar, correr comandos).

**Trigger (`on:`)** — qué dispara el workflow: `push` (cada vez que se sube código), `pull_request` (cada vez que se abre/actualiza un PR), `workflow_dispatch` (manual, con un botón "Run workflow" y, opcionalmente, inputs).

**Secret** — un valor sensible (password, token, llave) guardado cifrado en la configuración del repo (Settings → Secrets and variables → Actions), nunca visible en el código ni en los logs.

**`GITHUB_TOKEN`** — el token automático que GitHub le da gratis a cada workflow, sin configurar nada. Solo tiene acceso al repo donde vive ese workflow — no sirve para tocar otro repo tuyo (para eso hace falta un PAT).

**PAT (Personal Access Token)** — un token que generás vos mismo para que un script actúe en tu nombre, con permisos limitados a propósito (a diferencia de tu contraseña, que abre todo). *Fine-grained* = podés restringirlo a un repo puntual y a un permiso puntual (ej. `Contents: Read-only`); *classic* = permisos más amplios, menos recomendado hoy.

**Branch protection / required status checks** — regla en Settings → Branches que impide mergear un PR a `main` hasta que ciertos checks (ej. el job `lint-and-test`) pasen en verde. Así ningún colaborador puede saltarse el CI, ni siquiera el dueño del repo.

### Git / PRs

**Pull Request (PR)** — propuesta de fusionar una rama a otra (típicamente a `main`), con un lugar donde discutir el cambio, ver el diff, y donde corren los checks de CI antes de mergear.

**Non-fast-forward** — el error de `git push` cuando el remoto tiene commits que tu copia local no tiene; se soluciona con `git pull` (merge) o `git pull --rebase` antes de pushear de nuevo.

### Ansible

**Idempotente** — correr la misma operación muchas veces da el mismo resultado que correrla una vez; no rompe nada repetirla. Es la propiedad central de Ansible (a diferencia de un script de `user_data` que solo corre una vez, al nacer el servidor).

**Playbook** — un archivo `.yml` con una secuencia de tareas a ejecutar contra uno o más servidores (ej. `bootstrap.yml`, `deploy.yml`).

**Role** — un conjunto de tareas reusable y con nombre (ej. `docker`, `mariadb`, `app_deploy`), la unidad de organización de Ansible.

**Inventory** — la lista de servidores (`hosts.ini`) contra los que Ansible puede actuar, agrupados (ej. `[app_servers]`).

**`group_vars` / `host_vars`** — variables que aplican a todo un grupo de servidores, o solo a uno puntual (que sobreescribe al grupo para ese host).

### Terraform / infraestructura

**`terraform plan`** — muestra qué va a crear/cambiar/destruir, sin tocar nada todavía.

**`terraform apply`** — ejecuta esos cambios de verdad.

**Security Group (SG)** — el firewall de una instancia en AWS: qué puertos/orígenes (`ingress`) pueden entrar, y hacia dónde puede salir (`egress`) la instancia. `0.0.0.0/0` = cualquier IP.

### Estrategias de deploy

**Downtime** — el corte real de servicio mientras se reemplaza la versión vieja por la nueva (pasa con un solo contenedor: para el viejo antes de levantar el nuevo).

**Blue-green** — levantar la versión nueva en paralelo a la vieja, healthchequearla, y recién ahí cambiar el tráfico -- cero downtime, pero necesita dos versiones corriendo un momento.

**Rolling update** — con varias instancias/réplicas, actualizar de a una por vez, dejando siempre al menos una versión respondiendo (lo que hace Kubernetes por default en un Deployment).
