# git stash

## 📌 What it does
Temporarily saves uncommitted changes (both staged and unstaged) so you can switch tasks with a clean working directory, then come back and restore them later.

## 🔧 Syntax
```bash
git stash
git stash pop
```

## ✅ Examples

### Stash current changes
```bash
git stash
git stash save "work in progress on login"   # with a label
```

### List all stashes
```bash
git stash list
# stash@{0}: On main: work in progress on login
# stash@{1}: On feature: half-done dashboard
```

### Apply most recent stash (and remove it)
```bash
git stash pop
```

### Apply most recent stash (keep it in stash list)
```bash
git stash apply
```

### Apply a specific stash
```bash
git stash apply stash@{2}
```

### View contents of a stash
```bash
git stash show stash@{0}
git stash show -p stash@{0}   # full diff
```

### Delete a specific stash
```bash
git stash drop stash@{1}
```

### Delete all stashes
```bash
git stash clear
```

### Stash including untracked files
```bash
git stash -u
git stash --include-untracked
```

## 🔄 Typical Stash Workflow

```
Working on feature branch (files changed)
        ↓
Urgent bug reported on main!
        ↓
git stash              ← save work
        ↓
git switch main        ← fix the bug
        ↓
git commit -m "hotfix"
        ↓
git switch feature     ← back to feature
        ↓
git stash pop          ← restore work
```

## ⚠️ Common Mistakes
- Using `git stash pop` carelessly — if conflicts arise, stash is still applied but not removed
- Not labeling stashes — `stash@{0}` tells you nothing after a week
- Forgetting stashes exist — always check `git stash list`

## 🔗 Related Commands
- [`git switch`](../03-branching-and-merging/switch.md)
- [`git restore`](./restore.md)
- [`git reset`](./reset.md)
