# git push

## 📌 What it does
Uploads local commits to a remote repository, making your changes available to others.

## 🔧 Syntax
```bash
git push <remote> <branch>
```

## ✅ Examples

### Push current branch to origin
```bash
git push origin main
```

### Push and set upstream tracking (first time)
```bash
git push -u origin main
git push -u origin feature-login
```

### Push all branches
```bash
git push --all origin
```

### Push all tags
```bash
git push --tags
```

### Force push (overwrite remote — dangerous!)
```bash
git push --force origin main
git push -f origin main
```

### Safer force push (fails if someone else pushed)
```bash
git push --force-with-lease origin feature-login
```

### Delete a remote branch
```bash
git push origin --delete feature-old
```

## 🔄 Push Workflow

```
Local commits
      ↓
git push origin main
      ↓
Remote repo updated
      ↓
Team members can now pull
```

## 📋 What -u (--set-upstream) Does

```bash
git push -u origin main
```

After this, you can just type `git push` without specifying remote/branch — Git remembers.

## ⚠️ Common Mistakes

| Mistake | Fix |
|---|---|
| Push rejected (remote has new commits) | `git pull` first, then push |
| Force pushing shared branch | ❌ Never force push `main` |
| Forgetting `-u` on first push | Add it once, then plain `git push` works |
| Pushing sensitive files | Use `.gitignore` before staging |

## 🔗 Related Commands
- [`git pull`](./pull.md)
- [`git fetch`](./fetch.md)
- [`git remote`](./remote.md)
- [`git commit`](../02-staging-and-committing/commit.md)
