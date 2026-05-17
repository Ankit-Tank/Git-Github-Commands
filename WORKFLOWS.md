# 🔄 Common Git Workflows

> Real-world scenarios showing how Git commands work together. Copy these workflows directly into your daily development.

---

## 1️⃣ Starting a New Feature

```bash
# 1. Make sure main is up to date
git switch main
git pull origin main

# 2. Create and switch to feature branch
git switch -c feature/user-login

# 3. Work on your feature
# ... edit files ...

# 4. Stage and commit regularly
git add .
git commit -m "feat: add login form HTML"

# ... more work ...
git add .
git commit -m "feat: add login form validation"

# 5. Push branch to GitHub
git push -u origin feature/user-login

# 6. Open Pull Request (via CLI or browser)
gh pr create --title "Add user login" --body "Closes #12"
```

---

## 2️⃣ Fixing a Hotfix on Production

When an urgent bug is found on `main` while you're mid-feature:

```bash
# 1. Save current unfinished work
git stash save "half-done dashboard feature"

# 2. Switch to main and create hotfix branch
git switch main
git pull origin main
git switch -c hotfix/payment-crash

# 3. Fix the bug
# ... edit files ...
git add .
git commit -m "fix: resolve null pointer in payment processor"

# 4. Push and merge to main
git push origin hotfix/payment-crash
gh pr create --title "Hotfix: payment crash" --base main

# 5. After merge — go back to your feature
git switch feature/dashboard
git stash pop

# 6. Sync your feature branch with updated main
git rebase main
```

---

## 3️⃣ Contributing to Open Source

```bash
# 1. Fork on GitHub (click Fork button)

# 2. Clone your fork
git clone https://github.com/your-username/project.git
cd project

# 3. Add original repo as upstream
git remote add upstream https://github.com/original/project.git
git remote -v   # verify both remotes exist

# 4. Sync your fork with latest upstream
git fetch upstream
git switch main
git merge upstream/main
git push origin main

# 5. Create feature branch
git switch -c fix/typo-in-readme

# 6. Make changes and commit
git add README.md
git commit -m "fix: correct typo in installation steps"

# 7. Push to your fork
git push origin fix/typo-in-readme

# 8. Open Pull Request to original repo on GitHub
gh pr create --repo original/project --title "Fix typo in README"
```

---

## 4️⃣ Undoing Mistakes

### Undo last commit (keep your changes)
```bash
git reset --soft HEAD~1
# Your changes are now back in staging area
# Edit if needed, then recommit
git commit -m "better commit message"
```

### Undo last commit (discard changes completely)
```bash
git reset --hard HEAD~1
# ⚠️ Changes are gone permanently
```

### Undo a commit that was already pushed
```bash
git revert abc123          # creates new undo commit
git push origin main       # safe to push — history preserved
```

### Recover a deleted branch
```bash
git reflog                 # find the last commit on deleted branch
# HEAD@{3}: commit: Add login page  ← this is what you lost
git switch -c recovered-branch HEAD@{3}
```

### Recover from accidental hard reset
```bash
git reflog                         # find commit before reset
# HEAD@{2}: commit: Important work ← before the reset
git reset --hard HEAD@{2}          # restore to that point
```

### Accidentally committed to wrong branch
```bash
git log --oneline -3
# abc123 Oops committed here instead of feature branch

git switch feature-branch
git cherry-pick abc123      # apply that commit here

git switch main
git reset --hard HEAD~1     # remove it from main ⚠️
```

---

## 5️⃣ Keeping Feature Branch Up to Date

When `main` gets new commits while you're working on a feature:

```bash
# Option A — Rebase (cleaner history, recommended for personal branches)
git switch feature/login
git fetch origin
git rebase origin/main
# Resolve any conflicts, then:
git rebase --continue

# Option B — Merge (preserves exact history)
git switch feature/login
git merge main
# Resolve any conflicts, then:
git add .
git commit
```

---

## 6️⃣ Cleaning Up Before a Pull Request

Make messy commit history clean before opening a PR:

```bash
# You have 5 messy commits:
git log --oneline
# abc123 fix
# def456 wip
# ghi789 more wip
# jkl012 almost done
# mno345 feat: add login page  ← the real one

# Squash them all into one clean commit
git rebase -i HEAD~5

# In the editor, change:
# pick mno345 feat: add login page
# squash jkl012 almost done
# squash ghi789 more wip
# squash def456 wip
# squash abc123 fix

# Save → write a clean commit message
# Result: one clean commit ready for PR
```

---

## 7️⃣ Syncing a Fork

Keep your forked repo up to date with the original:

```bash
# First time only — add upstream
git remote add upstream https://github.com/original/repo.git

# Every time you want to sync
git fetch upstream
git switch main
git merge upstream/main
git push origin main      # update your fork on GitHub too
```

---

## 8️⃣ Releasing a New Version

```bash
# 1. Merge all features into main
git switch main
git pull origin main

# 2. Run final tests
# ... tests pass ...

# 3. Create annotated release tag
git tag -a v2.0.0 -m "Version 2.0.0 — add user authentication"

# 4. Push tag to GitHub
git push origin v2.0.0

# 5. Create GitHub Release
gh release create v2.0.0 --title "v2.0.0" --notes "Added user authentication"

# 6. Export clean zip for distribution
git archive --format=zip --prefix=app-v2.0.0/ v2.0.0 > app-v2.0.0.zip
```

---

## 9️⃣ Working on Two Things Simultaneously

Without stashing — use worktrees:

```bash
# Working on feature, urgent bug comes in
git worktree add ../hotfix-work hotfix/crash

# Fix the bug in the separate folder
cd ../hotfix-work
# ... fix ...
git add . && git commit -m "fix: resolve crash"

# Back to feature without any disruption
cd ../main-repo
# Your feature branch is untouched
```

---

## 🔟 Finding Who Broke Something

```bash
# Method 1 — blame (find who last changed a specific line)
git blame src/auth.py -L 42,42
# abc123 (Ankit 2024-03-10) buggy_function()
git show abc123    # see what that commit changed

# Method 2 — bisect (find which commit introduced a bug)
git bisect start
git bisect bad                  # current code is broken
git bisect good v1.0.0          # this version was fine
# Git checks out middle commit
# Test your app, then:
git bisect good   # or:
git bisect bad
# Repeat until Git finds the exact commit
git bisect reset  # go back to normal
```

---

> 🗒️ Quick command reference → [CHEATSHEET.md](./CHEATSHEET.md)
> ⚖️ Command comparisons → [COMPARISONS.md](./COMPARISONS.md)
> 📖 Terminology → [GLOSSARY.md](./GLOSSARY.md)
