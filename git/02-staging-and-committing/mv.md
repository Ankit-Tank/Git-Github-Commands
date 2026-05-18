# git mv

## 📌 What it does
Moves or renames a tracked file and automatically stages the change. It's the Git-aware alternative to the regular `mv` command.

## 🔧 Syntax
```bash
git mv <source> <destination>
```

## ✅ Examples

### Rename a file
```bash
git mv old-name.md new-name.md
```

### Move a file to a different folder
```bash
git mv app.py src/app.py
```

### Rename a folder
```bash
git mv old-folder/ new-folder/
```

## 🔄 git mv vs manual mv

### Without git mv (manual way — 3 steps):
```bash
mv old.py new.py
git rm old.py
git add new.py
```

### With git mv (1 step):
```bash
git mv old.py new.py
```

Both produce the same result, but `git mv` is cleaner and faster.

## 📋 After Running git mv

```bash
git status
# Output:
# renamed: old-name.md → new-name.md
```

The rename is automatically staged and ready to commit.

## ⚠️ Common Mistakes
- Using regular `mv` without telling Git — Git sees it as a deleted file + new untracked file
- Trying to move untracked files with `git mv` — only works on tracked files

## 🔗 Related Commands
- [`git rm`](./rm.md)
- [`git add`](./add.md)
- [`git status`](./status.md)
