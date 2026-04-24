# git diff

## 📌 What it does
Shows the exact line-by-line differences between file versions — working directory vs staged, staged vs last commit, or between any two commits/branches.

## 🔧 Syntax
```bash
git diff [options] [<commit>] [<commit>] [--] [<file>]
```

## ✅ Examples

### See unstaged changes (working dir vs staging area)
```bash
git diff
```

### See staged changes (staging area vs last commit)
```bash
git diff --staged
git diff --cached    # same thing
```

### Compare two branches
```bash
git diff main feature-login
```

### Compare two commits
```bash
git diff abc123 def456
```

### Diff a specific file only
```bash
git diff index.html
```

### Show only file names that changed (no line details)
```bash
git diff --name-only
```

### Show word-level diff
```bash
git diff --word-diff
```

## 📋 Reading Diff Output

```diff
- old line (removed)    ← shown in red with minus
+ new line (added)      ← shown in green with plus
  unchanged line        ← no symbol
```

Example:
```diff
@@ -1,4 +1,4 @@
 <html>
-  <title>Old Title</title>
+  <title>New Title</title>
 </html>
```

## 🔄 What to Compare

| Command | Compares |
|---|---|
| `git diff` | Working dir vs Staging |
| `git diff --staged` | Staging vs Last commit |
| `git diff HEAD` | Working dir vs Last commit |
| `git diff branch1 branch2` | Two branches |

## ⚠️ Common Mistakes
- Forgetting `--staged` to see what's actually about to be committed
- Running `git diff` after `git add` and seeing nothing — because diff shows unstaged changes only

## 🔗 Related Commands
- [`git status`](./status.md)
- [`git add`](./add.md)
- [`git log`](../06-inspection-and-history/log.md)
