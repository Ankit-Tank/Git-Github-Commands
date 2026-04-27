# git restore

## 📌 What it does
Discards changes in the working directory or unstages files from the staging area. The modern replacement for parts of `git checkout` and `git reset`.

## 🔧 Syntax
```bash
git restore <file>
git restore --staged <file>
```

## ✅ Examples

### Discard unsaved changes in a file (back to last commit)
```bash
git restore index.html
```

### Discard changes in all files
```bash
git restore .
```

### Unstage a file (keep changes in working dir)
```bash
git restore --staged index.html
```

### Unstage all files
```bash
git restore --staged .
```

### Restore file from a specific commit
```bash
git restore --source abc123 index.html
```

### Restore file from a specific branch
```bash
git restore --source main index.html
```

## 🔄 What restore Targets

```
Working Directory         Staging Area
──────────────────        ────────────
git restore <file>        git restore --staged <file>
(discards edits)          (moves back to working dir)
```

## 🆚 Modern vs Old Commands

| Task | Old command | New command |
|---|---|---|
| Discard file changes | `git checkout -- file` | `git restore file` |
| Unstage a file | `git reset HEAD file` | `git restore --staged file` |

> ✅ Prefer `git restore` — it's more readable and purpose-built.

## ⚠️ Common Mistakes
- Running `git restore <file>` when you meant `--staged` — this permanently discards your edits
- There is no undo for `git restore` on working directory changes (not staged = not recoverable)

## 🔗 Related Commands
- [`git status`](../02-staging-and-committing/status.md)
- [`git add`](../02-staging-and-committing/add.md)
- [`git reset`](./reset.md)
- [`git stash`](./stash.md)
