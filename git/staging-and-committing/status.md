# git status

## 📌 What it does
Shows the current state of your working directory and staging area — which files are modified, staged, untracked, or unchanged.

## 🔧 Syntax
```bash
git status
git status -s
```

## ✅ Examples

### Full status output
```bash
git status
```

### Short/compact status
```bash
git status -s
```

### Show branch info along with status
```bash
git status -b
```

## 📋 Understanding the Output

### Full output example:
```
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:        ← staged (green)
  modified: index.html

Changes not staged for commit:  ← modified but not staged (red)
  modified: style.css

Untracked files:                ← new files Git doesn't know about
  app.js
```

### Short output (`-s`) symbols:

| Symbol | Meaning |
|---|---|
| `M` | Modified |
| `A` | Added (staged) |
| `D` | Deleted |
| `?? ` | Untracked file |
| `MM` | Modified in both staging and working dir |

## 🔄 File States in Git

```
Untracked → Staged → Committed → Modified → Staged again...
```

## ⚠️ Common Mistakes
- Not running `git status` before committing — leads to committing wrong files
- Ignoring untracked files that should be in `.gitignore`

## 🔗 Related Commands
- [`git add`](./add.md)
- [`git diff`](./diff.md)
- [`git restore`](../05-undoing-changes/restore.md)
