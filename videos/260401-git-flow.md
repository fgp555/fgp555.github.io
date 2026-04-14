# Guion Youtube - Frank & Ivana

## Git Flow

💡 Concepto de Git Flow

Git Flow es una forma de organizar el trabajo en equipo usando ramas (branches) en Git, para que varias personas puedan desarrollar sin romper el proyecto.

En lugar de que todos trabajen sobre una sola versión del código, cada persona trabaja en su propia rama y luego se integran los cambios de forma ordenada.

🧠 En palabras simples

Git Flow es un flujo de trabajo que te dice:
dónde trabajar, cuándo integrar cambios y cómo evitar errores en equipo

### Git

```sh
git init                              # Initialize a new Git repository
git add .                             # Stage all files (prepare them for commit)
git commit -m "my first commit"       # Save changes with a descriptive message

git status                            # Show the current state of the working directory and staging area
git log --oneline -3                  # Show the last 3 commits in a compact format

git checkout -b mybranch              # Create and switch to a new branch
git checkout mybranch                 # Switch to an existing branch
git branch                            # List all local branches

git branch -m master main             # Rename a branch (e.g. master → main)
git branch -M main                    # Force rename current branch to "main" (overwrite if exists)

git branch -d mybranch                # Delete a branch (only if already merged)
git branch -D mybranch                # Force delete a branch (even if not merged ⚠️)

```

💡 Concepto de GitHub

GitHub es una plataforma en la nube donde puedes guardar, compartir y colaborar en proyectos de código usando Git.

🧠 En palabras simples

GitHub es como “la nube de tus proyectos”,
donde tu equipo puede ver, descargar y trabajar sobre el mismo código.

### GitHub

```sh
git clone https://github.com/fgp555/myrepo.git                  # Clone a remote repository to your local machine
git remote add origin https://github.com/fgp555/myrepo.git      # Add a remote repository named "origin"
git remote set-url origin https://github.com/fgp555/myrepo.git  # Update the URL of the existing remote "origin"
git remote -v                      # Show all configured remote repositories and their URLs
git remote remove origin           # Remove the remote connection named "origin"

git push -u origin main            # Push "main" to remote and set upstream tracking
git push origin main --force       # Force push (overwrites history ⚠️ use carefully)

git pull                           # Fetch and merge changes from remote
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
