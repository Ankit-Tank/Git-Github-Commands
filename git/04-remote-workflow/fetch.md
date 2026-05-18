# git fetch

## 📌 What it does
Downloads changes from a remote repository into your local repo — but does NOT merge them. Lets you review changes before applying them.

## 🔧 Syntax
```bash
git fetch <remote>
```

## ✅ Examples

### Fetch all changes from origin
```bash
git fetch origin
```

### Fetch a specific branch
```bash
git fetch origin main
```

### Fetch from all remotes
```bash
git fetch --all
```

### Fetch and remove deleted remote branches
```bash
git fetch --prune
git fetch -p
```

### See what was fetched
```bash
git fetch origin
git log HEAD..origin/main --oneline   # commits you don't have yet
```

## 🔄 fetch vs pull

```
git fetch   =  download only (safe, no changes to your files)
git pull    =  download + merge  (changes your working branch)
```

### Safe workflow using fetch:
```bash
git fetch origin              # download
git diff main origin/main     # review differences
git merge origin/main         # merge when ready
```

This is safer than `git pull` because you review before merging.

## 📋 What Fetch Creates

After `git fetch origin`, Git creates remote-tracking branches:

```
origin/main
origin/develop
origin/feature-login
```

These are read-only snapshots of the remote. You can inspect them:

```bash
git log origin/main --oneline
git checkout origin/main        # view in detached HEAD
```

## ⚠️ Common Mistakes
- Confusing fetch with pull — fetch never modifies your working files
- Forgetting `--prune` — stale remote-tracking branches pile up over time

## 🔗 Related Commands
- [`git pull`](./pull.md)
- [`git merge`](../03-branching-and-merging/merge.md)
- [`git remote`](./remote.md)
- [`git log`](../06-inspection-and-history/log.md)
