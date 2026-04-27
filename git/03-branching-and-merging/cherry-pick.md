# git cherry-pick

## 📌 What it does
Applies a specific commit from one branch onto your current branch — without merging the entire branch.

## 🔧 Syntax
```bash
git cherry-pick <commit-hash>
```

## ✅ Examples

### Apply a single commit
```bash
git cherry-pick abc123
```

### Apply multiple commits
```bash
git cherry-pick abc123 def456
```

### Apply a range of commits
```bash
git cherry-pick abc123..ghi789
```

### Cherry-pick without auto-committing (review first)
```bash
git cherry-pick --no-commit abc123
```

### Abort a cherry-pick in progress
```bash
git cherry-pick --abort
```

### Continue after resolving conflict
```bash
git cherry-pick --continue
```

## 🔄 When to Use Cherry-Pick

| Scenario | Use cherry-pick? |
|---|---|
| Bug fix committed to wrong branch | ✅ Yes |
| Need one feature from another branch | ✅ Yes |
| Want to merge entire branch | ❌ Use `git merge` |
| Want clean linear history | ❌ Use `git rebase` |

## 📋 Real World Example

You fixed a critical bug on `develop` but need it on `main` immediately:

```bash
# Find the commit hash
git log develop --oneline
# abc123 Fix payment crash

# Apply it to main
git switch main
git cherry-pick abc123
```

## ⚠️ Common Mistakes
- Cherry-picking too many commits when a full merge would be better
- Creating duplicate commits — cherry-picked commits have new hashes even if the changes are identical
- Forgetting to resolve conflicts when cherry-picking old commits

## 🔗 Related Commands
- [`git rebase`](./rebase.md)
- [`git merge`](./merge.md)
- [`git log`](../06-inspection-and-history/log.md)
