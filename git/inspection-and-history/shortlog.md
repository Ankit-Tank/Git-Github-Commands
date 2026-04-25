# git shortlog

## 📌 What it does
Summarizes `git log` output by grouping commits per author. Great for getting a quick overview of who contributed what to a project.

## 🔧 Syntax
```bash
git shortlog [options]
```

## ✅ Examples

### Basic shortlog (grouped by author)
```bash
git shortlog
```

### Sort by number of commits (most active first)
```bash
git shortlog -sn
```

### Show commit count only (no messages)
```bash
git shortlog -s
```

### Include email addresses
```bash
git shortlog -sne
```

### Shortlog for a specific branch
```bash
git shortlog main
```

### Shortlog for a date range
```bash
git shortlog --after="2024-01-01" --before="2024-12-31"
```

### Summary of contributions since a tag
```bash
git shortlog v1.0.0..HEAD
```

## 📋 Reading the Output

### Basic output:
```
Ankit Tank (12):
      Add login page
      Fix navbar bug
      Update README

Rahul Shah (5):
      Add dashboard
      Fix typo
```

### With `-sn` flag (sorted summary):
```
12  Ankit Tank
 5  Rahul Shah
 3  Priya Mehta
```

## 🔄 Common Use Cases

### Generate a contributors list for README
```bash
git shortlog -sn HEAD
```

### See contributions in a release
```bash
git shortlog v1.0.0..v2.0.0 -sn
```

## ⚠️ Common Mistakes
- Same person appearing twice with different name/email — fix with `.mailmap` file
- Using shortlog instead of `git log` when you need full detail

## 🔗 Related Commands
- [`git log`](./log.md)
- [`git blame`](./blame.md)
