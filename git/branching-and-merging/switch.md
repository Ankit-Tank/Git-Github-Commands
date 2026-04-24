# git switch

## 📌 What it does
The modern, focused command for switching branches. Introduced in Git 2.23 to replace the branch-switching role of `git checkout` with a clearer, safer command.

## 🔧 Syntax
```bash
git switch <branch>
git switch -c <new-branch>
```

## ✅ Examples

### Switch to an existing branch
```bash
git switch main
git switch develop
```

### Create and switch to a new branch
```bash
git switch -c feature-dashboard
```

### Switch to previous branch
```bash
git switch -
```

### Create a branch from a specific commit
```bash
git switch -c new-branch abc123
```

### Switch to a remote branch
```bash
git switch -t origin/feature-login
```

## 🆚 git switch vs git checkout

| Task | git checkout | git switch |
|---|---|---|
| Switch branch | `git checkout main` | `git switch main` |
| Create + switch | `git checkout -b feat` | `git switch -c feat` |
| Restore files | `git checkout -- file` | ❌ use `git restore` |
| Detached HEAD | `git checkout abc123` | `git switch --detach abc123` |

> Prefer `git switch` for branch operations — it's clearer and prevents accidental file restores.

## ⚠️ Common Mistakes
- Trying to use `git switch` to restore files — it can't, use `git restore` instead
- Switching branches with uncommitted changes — Git will warn you; stash or commit first

## 🔗 Related Commands
- [`git branch`](./branch.md)
- [`git checkout`](./checkout.md)
- [`git stash`](../05-undoing-changes/stash.md)
