# git reset

## 📌 What it does
Undoes commits or unstages files by moving the HEAD and branch pointer backward. Has three modes that control how far the reset goes.

## 🔧 Syntax
```bash
git reset [--soft | --mixed | --hard] <commit>
```

## ✅ Examples

### Unstage a file (keep changes in working dir)
```bash
git reset HEAD index.html
git restore --staged index.html   # modern equivalent
```

### Undo last commit — keep changes staged
```bash
git reset --soft HEAD~1
```

### Undo last commit — keep changes unstaged (default)
```bash
git reset HEAD~1
git reset --mixed HEAD~1
```

### Undo last commit — discard all changes completely
```bash
git reset --hard HEAD~1
```

### Reset to a specific commit
```bash
git reset --hard abc123
```

### Undo last 3 commits (keep changes)
```bash
git reset --soft HEAD~3
```

## 🔄 The Three Modes Explained

```
Commit History    Staging Area    Working Directory
──────────────    ────────────    ─────────────────
   --soft    →    unchanged   →    unchanged
   --mixed   →    cleared     →    unchanged   (default)
   --hard    →    cleared     →    cleared ⚠️
```

| Mode | Commits | Staged Changes | Working Files |
|---|---|---|---|
| `--soft` | ✅ Undone | Kept staged | Kept |
| `--mixed` | ✅ Undone | Unstaged | Kept |
| `--hard` | ✅ Undone | ❌ Deleted | ❌ Deleted |

## ⚠️ reset vs revert

| | `git reset` | `git revert` |
|---|---|---|
| How | Deletes commits from history | Creates new undo commit |
| Safe for shared branches | ❌ No | ✅ Yes |
| Use when | Local commits only | Already pushed commits |

## ⚠️ Common Mistakes
- Using `--hard` without realizing it deletes your work permanently
- Resetting commits that were already pushed — causes problems for teammates
- Recovery tip: use `git reflog` to find and restore lost commits

## 🔗 Related Commands
- [`git revert`](./revert.md)
- [`git restore`](./restore.md)
- [`git reflog`](../07-advanced/reflog.md)
- [`git stash`](./stash.md)
