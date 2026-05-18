# git rm

## 📌 What it does
Removes files from the working directory AND the staging area (index). Tells Git to stop tracking the file.

## 🔧 Syntax
```bash
git rm <file>
```

## ✅ Examples

### Remove a file from repo and disk
```bash
git rm index.html
```

### Remove a file from Git tracking but KEEP it on disk
```bash
git rm --cached secret.env
```

### Force remove a file that has staged changes
```bash
git rm -f temp.txt
```

### Remove all `.log` files
```bash
git rm *.log
```

### Remove an entire folder
```bash
git rm -r old-folder/
```

## 🔄 git rm vs manual delete

### Manual delete (wrong way):
```bash
rm file.txt         # deletes from disk
# Git still tracks it as "deleted" — need git add -u to stage deletion
```

### git rm (correct way):
```bash
git rm file.txt     # deletes from disk AND stages the deletion
```

## 📋 Most Common Use Case — Untrack a file

Already committed `.env` by mistake? Fix it:

```bash
git rm --cached .env
echo ".env" >> .gitignore
git add .gitignore
git commit -m "Remove .env from tracking"
```

## ⚠️ Common Mistakes
- Using `git rm` when you meant `git rm --cached` — deletes the file from disk too
- Forgetting to add the file to `.gitignore` after removing it from tracking

## 🔗 Related Commands
- [`git mv`](./mv.md)
- [`git add`](./add.md)
- [`git restore`](../05-undoing-changes/restore.md)
