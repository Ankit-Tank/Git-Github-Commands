# git add

## 📌 What it does
Moves changes from the working directory to the staging area (index). This prepares them to be included in the next commit.

## 🔧 Syntax
```bash
git add <file>
git add <directory>
git add .
```

## ✅ Examples

### Stage a specific file
```bash
git add index.html
```

### Stage multiple files
```bash
git add index.html style.css app.js
```

### Stage all changes in current directory
```bash
git add .
```

### Stage all changes across entire repo
```bash
git add -A
```

### Stage changes interactively (choose chunks)
```bash
git add -p
```

### Stage all files of a specific type
```bash
git add *.py
```

## 🔄 How Staging Works

```
Working Directory   →   Staging Area   →   Repository
  (edit files)        (git add)           (git commit)
```

## git add . vs git add -A

| Command | Stages new files | Stages modified | Stages deleted |
|---|---|---|---|
| `git add .` | ✅ | ✅ | ✅ (Git 2.x+) |
| `git add -A` | ✅ | ✅ | ✅ |
| `git add -u` | ❌ | ✅ | ✅ |

## ⚠️ Common Mistakes
- Staging files you didn't mean to (use `git status` before committing)
- Not using `.gitignore` — causes sensitive files like `.env` to get staged accidentally
- Confusing staging with saving — staged files aren't committed yet

## 🔗 Related Commands
- [`git status`](./status.md)
- [`git commit`](./commit.md)
- [`git diff`](./diff.md)
- [`git restore`](../05-undoing-changes/restore.md)
