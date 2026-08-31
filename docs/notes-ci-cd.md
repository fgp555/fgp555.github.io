"CI es probar automáticamente cada cambio antes de integrarlo; CD es desplegar automáticamente ese cambio ya probado."

```sh
# Paso 1: Subir el workflow a GitHub
cd fgp-backend
git add .github/workflows/ci.yml CLAUDE.md
git commit -m "add: CI workflow (lint + tests)"
git push

# Paso 2: el ejercicio real — practicar el ciclo rojo→verde con un PR
git checkout -b practica-ci


git add -A
git commit -m "romper algo a propósito para practicar CI"
git push -u origin practica-ci


```

# Fase 2

```sh
cd fgp-infra-dev
terraform plan


terraform apply
./lab.sh ip
```

Paso 2: generar el PAT para que el runner pueda leer fgp-ansible

Andá a github.com → tu foto de perfil → Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token:

Repository access: Only select repositories → fgp-ansible
Permissions → Repository permissions → Contents: Read-only
Generá y copiá el token (solo se muestra una vez).

pegalo ahora como el secret ANSIBLE_REPO_TOKEN en fgp-distributions → Settings → Secrets and variables → Actions → New repository secret.

```sh
# Secret 2: SSH_PRIVATE_KEY
cat ~/.ssh/id_ed25519

# Secret 3: GROUP_VARS_ALL_YAML
cat inventory/group_vars/all.yml

# Secret 4: HOST_VARS_APP_DEV_YAML
cat inventory/host_vars/app-dev.yml

```

# Ahora subimos el workflow y lo disparamos.

```sh
cd fgp-distributions
git add .github/
git commit -m "add: deploy workflow (app-dev)"
git push
```

Panorama general
Son dos workflows en dos repos distintos, con un límite claro entre ellos:

```sh
fgp-backend                      fgp-distributions                    app-dev (EC2)
────────────                     ──────────────────                   ─────────────
push/PR a main                   push a main (build ya copiado)
     │                                  │
     ▼                                  ▼
[CI] ci.yml                      [CD] deploy.yml (manual, workflow_dispatch)
 - npm ci                         - checkout fgp-ansible (privado, PAT)
 - npm run linter                 - instalar Ansible
 - npm test                       - armar ~/.ssh/id_ed25519 (secret)
 (nunca toca un servidor)         - armar inventory/hosts.ini (con la IP que pasás a mano)
                                   - armar group_vars/host_vars (desde 2 secrets)
                                   - ansible-playbook bootstrap.yml -l app-dev  ──┐
                                   - ansible-playbook deploy.yml -l app-dev    ──┼──▶ SSH
                                                                                  │
                                                                                  ▼
                                                                          Docker build,
                                                                          migrate, seed,
                                                                          docker compose up -d
```
