# git revert

## 📌 What it does
Creates a new commit that undoes the changes from a previous commit — without deleting history. The safe way to undo on shared/public branches.

## 🔧 Syntax
```bash
git revert <commit>
```

## ✅ Examples

### Revert the last commit
```bash
git revert HEAD
```

### Revert a specific commit
```bash
git revert abc123
```

### Revert without opening the editor (auto message)
```bash
git revert HEAD --no-edit
```

### Revert multiple commits
```bash
git revert HEAD~3..HEAD
```

### Revert but don't auto-commit (stage only)
```bash
git revert --no-commit abc123
```

## 🔄 How Revert Works

```
Before:
A - B - C - D (HEAD)
            ↑ this commit has a bug

git revert D

After:
A - B - C - D - D'
                ↑ new commit that undoes D
```

History is preserved. D still exists, but D' cancels it out.

## 🆚 revert vs reset

| | `git revert` | `git reset` |
|---|---|---|
| Method | Adds new undo commit | Deletes commits |
| History | Preserved ✅ | Modified ⚠️ |
| Safe for pushed commits | ✅ Yes | ❌ No |
| Team-friendly | ✅ Yes | ❌ No |

> ✅ Always use `git revert` when the commit has already been pushed.

## 📋 Real World Example

A bad commit was pushed to `main`:

```bash
git log --oneline
# abc123 Add login feature  ← good
# def456 Broke the database ← bad, already pushed
# ghi789 Fix navbar         ← good

git revert def456
# Creates new commit: "Revert 'Broke the database'"
git push origin main
```

Everyone pulls and gets the fix without any history rewriting.

## ⚠️ Common Mistakes
- Using `git reset` instead of `git revert` on shared branches
- Reverting a merge commit without the `-m` flag — requires specifying parent

## 🔗 Related Commands
- [`git reset`](./reset.md)
- [`git log`](../06-inspection-and-history/log.md)
- [`git reflog`](../07-advanced/reflog.md)
