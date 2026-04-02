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
git commit -m "my comment"            # Save changes with a descriptive message

git checkout -b newbranch             # Create and switch to a new branch
git checkout newbranch                # Switch to an existing branch
git branch                            # List all local branches

git branch -m master main             # Rename current branch (e.g. master → main)
```

💡 Concepto de GitHub

GitHub es una plataforma en la nube donde puedes guardar, compartir y colaborar en proyectos de código usando Git.

🧠 En palabras simples

GitHub es como “la nube de tus proyectos”,
donde tu equipo puede ver, descargar y trabajar sobre el mismo código.

### GitHub

```sh
## Branch Setup & Push
git branch -M main                   # Ensure your main branch is named "main"
git push -u origin main              # Push main to GitHub and set upstream tracking
git push origin main --force         # Force push (overwrites history ⚠️ use carefully)
git pull                             # Fetch and merge changes from remote
git pull --rebase                    # Fetch and reapply commits (cleaner history)

## Clone a Repository
git clone https://github.com/user/repo.git   # Clone a remote repository to your local machine
git remote -v                                # Show connected remote repositories

## View / Modify Remotes
git remote add origin https://github.com/user/repo.git  # Connect local repo to GitHub
git remote remove origin                                # Remove remote connection

## Change the Remote URL
git remote set-url origin https://github.com/user/repo.git   # Update remote repository URL

## Add Additional Remote
git remote add origin2 https://github.com/user/repo.git  # Add a second remote repository
git push origin2 main                                    # Push main branch to the second remote

git branch -d newbranch            # Delete a branch (only if already merged)
git branch -D newbranch            # Force delete a branch (even if not merged ⚠️)

git fetch                          # Download changes from remote WITHOUT merging
git branch -r                      # List remote branches
git branch -a                      # List all branches (local + remote)
git checkout -b rama123 origin/rama123   # Create a local branch tracking a remote branch
```

### Merge

```sh
## Merge Branches Local
git checkout main                  # Switch to main branch
git merge branch123                # Merge branch123 into main

## Fetch & Merge remote
git fetch                          # Download updates from remote
git merge origin/rama123           # Merge remote branch into current branch

## Reset & Abort
git merge --abort                  # Cancel an ongoing merge (e.g. conflicts)

# Compare branches
git diff rama1 rama2               # Show differences between two branches
git diff dev..main                 # Compare changes between dev and main
```

### Proteger la rama main en GitHub (sugerencia para siguiente video)

```sh
# This is NOT done in terminal, it's configured in GitHub UI

# Steps:
# 1. Go to your repository on GitHub
# 2. Settings → Branches
# 3. Add rule (Branch protection rule)
# 4. Enter: main
# 5. Enable options like:
#    - Require pull request before merging   (prevents direct pushes)
#    - Require approvals                     (code review required)
#    - Restrict who can push                 (limit access)

# Result:
# No one can push directly to main 🚫
# All changes must go through Pull Requests ✅
```
