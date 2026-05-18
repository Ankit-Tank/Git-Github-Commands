# git checkout

## 📌 What it does
Switches between branches or restores files from a previous commit. One of Git's older multi-purpose commands (newer alternatives: `git switch` for branches, `git restore` for files).

## 🔧 Syntax
```bash
git checkout <branch>
git checkout -b <new-branch>
git checkout <commit> -- <file>
```

## ✅ Examples

### Switch to an existing branch
```bash
git checkout main
git checkout develop
```

### Create and switch to a new branch (most used)
```bash
git checkout -b feature-login
```

### Switch to previous branch
```bash
git checkout -
```

### Restore a specific file to last committed state
```bash
git checkout -- index.html
```

### Checkout a file from a specific commit
```bash
git checkout abc123 -- style.css
```

### Checkout a specific commit (detached HEAD)
```bash
git checkout abc123
```

## ⚠️ Detached HEAD State

When you checkout a specific commit instead of a branch:

```bash
git checkout abc123
# HEAD is now at abc123  ← detached HEAD warning
```

You are no longer on a branch. Any commits made here will be lost unless you create a branch:

```bash
git checkout -b new-branch-from-here
```

## 🆚 checkout vs switch vs restore

| Task | Old way | New way (Git 2.23+) |
|---|---|---|
| Switch branch | `git checkout main` | `git switch main` |
| Create + switch | `git checkout -b feat` | `git switch -c feat` |
| Restore file | `git checkout -- file` | `git restore file` |

> `git switch` and `git restore` were introduced to reduce confusion around `git checkout` doing too many things.

## ⚠️ Common Mistakes
- Losing uncommitted work when switching branches (stash or commit first)
- Getting stuck in detached HEAD without creating a branch

## 🔗 Related Commands
- [`git switch`](./switch.md)
- [`git branch`](./branch.md)
- [`git restore`](../05-undoing-changes/restore.md)
