# git show

## 📌 What it does
Displays detailed information about a specific Git object — most commonly a commit, including its metadata and the full diff of changes.

## 🔧 Syntax
```bash
git show <commit>
```

## ✅ Examples

### Show the latest commit
```bash
git show
git show HEAD
```

### Show a specific commit
```bash
git show abc123
```

### Show a commit from N commits ago
```bash
git show HEAD~2    # 2 commits before HEAD
```

### Show only the commit message (no diff)
```bash
git show --stat abc123
```

### Show only file names that changed
```bash
git show --name-only abc123
```

### Show a specific file's content at a commit
```bash
git show abc123:index.html
```

### Show a tag
```bash
git show v1.0.0
```

### Show a specific branch's latest commit
```bash
git show main
git show origin/develop
```

## 📋 Understanding the Output

```
commit abc123def456...          ← commit hash
Author: Ankit Tank <a@mail.com> ← who committed
Date:   Mon Jan 1 10:00:00 2024 ← when

    Add login page               ← commit message

diff --git a/index.html b/index.html
+++ b/index.html
+ <form>login</form>             ← what changed
```

## ⚠️ Common Mistakes
- Confusing `git show` with `git log` — `log` lists commits, `show` inspects one
- Forgetting you can use `git show <branch>` to peek at another branch's latest commit

## 🔗 Related Commands
- [`git log`](./log.md)
- [`git diff`](../02-staging-and-committing/diff.md)
- [`git blame`](./blame.md)
