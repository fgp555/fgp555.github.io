# Guion Youtube - Frank & Ivana

## Git Flow

### Files & Directory

```sh
# Ctrl + L                         # Clear the terminal screen
# Ctrl + C                         # Interrupt/stop the current running process
cd myfolder                        # Change directory to "myfolder"
cd ..                              # Move up one directory level
ls                                 # List files and directories in the current folder
ls -a                              # List all files, including hidden ones (starting with .)
```

### Git

```sh
git init                              # Initialize a new Git repository
git status                            # Show the current state of the working directory and staging area

git add .                             # Stage all files (prepare them for commit)
git commit -m "my first commit"       # Create a commit with a descriptive message
git log --oneline -3                  # Show the last 3 commits in a compact format

git restore .                         # Discard unstaged changes in tracked files (restore to last commit)
git clean -fd                         # Remove untracked files and directories ⚠️ irreversible
git commit --amend --no-edit          # Modify the last commit without changing its message

git checkout 5edd0a2                  # Checkout a specific commit by hash (detached HEAD)
git checkout HEAD~1                   # Checkout the previous commit (detached HEAD state)

git checkout -b mybranch              # Create and switch to a new branch
git branch                            # List all local branches
git checkout mybranch                 # Switch to an existing branch

git branch -m master main             # Rename a branch (e.g. master → main), fails if "main" exists
git branch -d mybranch                # Delete a branch (only if already merged)
```

### GitHub

```sh
git clone https://github.com/fgp555/myrepo.git                  # Clone a remote repository to your local machine
git remote -v                      # Show all configured remote repositories and their URLs

git push -u origin main            # Push "main" to remote and set upstream tracking
git pull                           # Fetch and merge changes from remote

git push --force                   # Force push (overwrites history ⚠️ use carefully)
git pull --rebase                  # Fetch changes and reapply local commits (cleaner history)
```

### Merge

```sh
git merge mybranch                 # Merge mybranch into the current branch (e.g. main)

git fetch                          # Download updates from remote WITHOUT merging
git branch -a                      # List all branches (local + remote)
git merge origin/remotebranch      # Merge a remote-tracking branch into the current branch

git merge --abort                  # Abort an ongoing merge (e.g. when conflicts occur)
```

---

# 🧠 Los 3 estados (modelo mental correcto)

| Estado                   | Descripción                                                          |
| ------------------------ | -------------------------------------------------------------------- |
| **Working Directory**    | Donde editas y modificas los archivos en tu sistema                  |
| **Staging Area (Index)** | Donde seleccionas exactamente qué cambios vas a incluir en el commit |
| **Repository (HEAD)**    | Donde se guarda el historial confirmado de commits                   |

📁 Ubicación de los 3 estados

| Estado                   | Ubicación física                        | Detalle técnico                                      |
| ------------------------ | --------------------------------------- | ---------------------------------------------------- |
| **Working Directory**    | Fuera de `.git/`                        | Son los archivos reales del proyecto                 |
| **Staging Area (Index)** | Dentro de `.git/index`                  | Archivo binario que actúa como “snapshot intermedio” |
| **Repository (HEAD)**    | Dentro de `.git/` (`objects/`, `refs/`) | Base de datos de commits, árboles (trees) y blobs    |

---

# 💡 Concepto de Git Flow

Git Flow es una forma de organizar el trabajo en equipo usando ramas (branches) en Git,
para que varias personas puedan desarrollar sin romper el proyecto.

En lugar de que todos trabajen sobre una sola versión del código,
cada persona trabaja en su propia rama y luego se integran los cambios de forma ordenada.

🧠 En palabras simples

Git Flow es un flujo de trabajo que te dice:
dónde trabajar, cuándo integrar cambios y cómo evitar errores en equipo

---

# 💡 Concepto de GitHub

GitHub es una plataforma en la nube donde puedes guardar,
compartir y colaborar en proyectos de código usando Git.

🧠 En palabras simples

GitHub es como “la nube de tus proyectos”,
donde tu equipo puede ver, descargar y trabajar sobre el mismo código.

# 🔐 Proteger la rama `main` en GitHub

> Settings
> Rules > Rulesets
> New ruleset > New branch ruleset
> Ruleset Name > "Protege rama main"
> Enforcement status > Active
> Bypass list
> ...Dejar vacío (O agregar tu usuario)
> Target branches > main

## ✅ Reglas recomendadas para activar

| Opción                                   | Descripción                                    |
| ---------------------------------------- | ---------------------------------------------- |
| ✅ Restrict updates                      | Impide hacer push directo                      |
| ✅ Restrict deletions                    | Impide borrar la rama                          |
| ✅ Require a pull request before merging | Obliga a usar PR antes de fusionar             |
| ✅ ...Require approvals (1)              | Requiere al menos 1 aprobación antes del merge |
| ✅ Block force pushes                    | Impide sobrescribir la historia con `--force`  |
