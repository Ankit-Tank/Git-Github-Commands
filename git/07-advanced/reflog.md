# git reflog

## 📌 What it does
Records every movement of HEAD in your local repository — including commits, resets, merges, rebases, and checkouts. Your safety net for recovering "lost" commits.

## 🔧 Syntax
```bash
git reflog
```

## ✅ Examples

### View full reflog
```bash
git reflog
```

### View reflog for a specific branch
```bash
git reflog main
```

### Show reflog with dates
```bash
git reflog --date=relative
git reflog --date=iso
```

### Limit output to last 10 entries
```bash
git reflog -10
```

### Recover a lost commit using reflog
```bash
git reflog
# HEAD@{2}: commit: Add login page  ← lost this!

git checkout HEAD@{2}              # view it
git branch recovered-branch HEAD@{2}  # save it as a branch
```

### Undo an accidental hard reset
```bash
git reset --hard HEAD~3    # oops! lost 3 commits

git reflog
# HEAD@{1}: commit: My important commit  ← before the reset

git reset --hard HEAD@{1}  # restored!
```

## 📋 Reading Reflog Output

```
abc1234 HEAD@{0}: commit: Add navbar
def5678 HEAD@{1}: reset: moving to HEAD~1
ghi9012 HEAD@{2}: commit: Add login page   ← recoverable from here
jkl3456 HEAD@{3}: checkout: moving to main
```

| Column | Meaning |
|---|---|
| `abc1234` | Commit hash |
| `HEAD@{0}` | How many steps ago (0 = most recent) |
| `commit:` | Type of action |
| `Add navbar` | Description |

## 🔄 reflog vs log

| | `git log` | `git reflog` |
|---|---|---|
| Shows | Commit history | Every HEAD movement |
| Includes resets | ❌ No | ✅ Yes |
| Available on remote | ✅ Yes | ❌ Local only |
| Best for | Reading history | Recovering lost work |

## ⚠️ Important Notes
- Reflog is **local only** — not pushed to remote
- Entries expire after **90 days** by default
- Always check reflog before assuming work is lost

## 🔗 Related Commands
- [`git reset`](../05-undoing-changes/reset.md)
- [`git log`](../06-inspection-and-history/log.md)
- [`git cherry-pick`](../03-branching-and-merging/cherry-pick.md)
