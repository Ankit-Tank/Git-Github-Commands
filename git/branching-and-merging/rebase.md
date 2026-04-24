# git rebase

## 📌 What it does
Moves or replays commits from one branch onto another, creating a cleaner linear history. Unlike merge, it rewrites commit history.

## 🔧 Syntax
```bash
git rebase <base-branch>
git rebase -i <commit>
```

## ✅ Examples

### Rebase feature branch onto main
```bash
git switch feature-login
git rebase main
```

### Interactive rebase (edit last 3 commits)
```bash
git rebase -i HEAD~3
```

### Abort a rebase in progress
```bash
git rebase --abort
```

### Continue rebase after resolving conflict
```bash
git rebase --continue
```

### Skip a conflicting commit
```bash
git rebase --skip
```

## 🔄 Merge vs Rebase

### Merge — preserves history:
```
main:    A - B - C ------- M
                  \       /
feature:           D - E -
```

### Rebase — linear history:
```
main:    A - B - C - D' - E'
```
> D' and E' are the same changes as D and E, but with new commit hashes.

## ✏️ Interactive Rebase Commands

When you run `git rebase -i HEAD~3`, an editor opens with options:

| Command | What it does |
|---|---|
| `pick` | Keep commit as-is |
| `reword` | Keep commit, edit message |
| `edit` | Pause to amend the commit |
| `squash` | Merge into previous commit |
| `fixup` | Like squash but discard message |
| `drop` | Remove the commit entirely |

### Example — squash 3 commits into 1:
```
pick abc123 Add login form
squash def456 Fix typo in login
squash ghi789 Add validation
```
Result: one clean commit.

## ⚠️ Golden Rule of Rebase

> ❌ **Never rebase commits that have been pushed to a shared/public branch.**

Rebasing rewrites commit hashes. If others have based work on those commits, it creates conflicts for everyone.

✅ Safe to rebase: your local feature branch before merging.

## 🔗 Related Commands
- [`git merge`](./merge.md)
- [`git cherry-pick`](./cherry-pick.md)
- [`git reflog`](../07-advanced/reflog.md)
