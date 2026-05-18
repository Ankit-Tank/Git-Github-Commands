# git remote

## 📌 What it does
Manages connections to remote repositories. Lets you add, remove, rename, and inspect remote URLs.

## 🔧 Syntax
```bash
git remote [options]
```

## ✅ Examples

### List all remotes
```bash
git remote
git remote -v    # with URLs
```

### Add a new remote
```bash
git remote add origin https://github.com/user/repo.git
```

### Rename a remote
```bash
git remote rename origin upstream
```

### Remove a remote
```bash
git remote remove origin
```

### Change remote URL
```bash
git remote set-url origin https://github.com/user/new-repo.git
```

### Show detailed info about a remote
```bash
git remote show origin
```

## 📋 Understanding "origin"

`origin` is just a default name Git gives to the remote when you clone. You can rename it or have multiple remotes.

```bash
git remote -v
# origin   https://github.com/you/repo.git (fetch)
# origin   https://github.com/you/repo.git (push)
```

## 🔄 Multiple Remotes (Fork Workflow)

Common when contributing to open source:

```bash
git remote add origin https://github.com/you/repo.git        # your fork
git remote add upstream https://github.com/original/repo.git # original repo

git fetch upstream        # get updates from original
git merge upstream/main   # apply to your local main
```

## ⚠️ Common Mistakes
- Forgetting to add a remote after `git init` — push will fail
- Mixing up HTTPS and SSH URLs (switch with `git remote set-url`)

## 🔗 Related Commands
- [`git clone`](../01-setup/clone.md)
- [`git push`](./push.md)
- [`git fetch`](./fetch.md)
- [`git pull`](./pull.md)
