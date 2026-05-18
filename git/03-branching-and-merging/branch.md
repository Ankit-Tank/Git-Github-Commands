# git branch

## 📌 What it does
Creates, lists, renames, and deletes branches. A branch is an independent line of development that lets you work without affecting the main codebase.

## 🔧 Syntax
```bash
git branch [options] [branch-name]
```

## ✅ Examples

### List all local branches
```bash
git branch
```

### List all branches including remote
```bash
git branch -a
```

### Create a new branch
```bash
git branch feature-login
```

### Rename current branch
```bash
git branch -m new-name
```

### Rename a specific branch
```bash
git branch -m old-name new-name
```

### Delete a branch (safe — only if merged)
```bash
git branch -d feature-login
```

### Force delete a branch (even if unmerged)
```bash
git branch -D feature-login
```

### See which branches are merged into main
```bash
git branch --merged
```

### See branches NOT yet merged
```bash
git branch --no-merged
```

## 🌿 Branch Naming Conventions

| Type | Example |
|---|---|
| Feature | `feature/user-auth` |
| Bug fix | `fix/login-error` |
| Hotfix | `hotfix/payment-crash` |
| Release | `release/v1.2.0` |
| Experiment | `experiment/new-ui` |

## 🔄 Branch Workflow

```
main
 └── feature/login     ← create branch
       ↓ work here
       ↓ git add & commit
       ↓ merge back to main
```

## ⚠️ Common Mistakes
- Working directly on `main` instead of a feature branch
- Forgetting to switch to the new branch after creating it (use `git switch` or `git checkout -b`)

## 🔗 Related Commands
- [`git switch`](./switch.md)
- [`git checkout`](./checkout.md)
- [`git merge`](./merge.md)
