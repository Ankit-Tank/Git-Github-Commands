# git pull

## 📌 What it does
Downloads changes from a remote repository AND immediately merges them into your current branch. It's a combination of `git fetch` + `git merge`.

## 🔧 Syntax
```bash
git pull <remote> <branch>
```

## ✅ Examples

### Pull from origin into current branch
```bash
git pull
git pull origin main
```

### Pull using rebase instead of merge (cleaner history)
```bash
git pull --rebase
git pull --rebase origin main
```

### Pull a specific branch
```bash
git pull origin develop
```

### Fetch without merging (safe preview)
```bash
git fetch origin
git diff main origin/main    # see what's different
git merge origin/main        # merge when ready
```

## 🔄 What git pull Does Internally

```
git pull
  = git fetch origin
  + git merge origin/main
```

```
Remote: A - B - C - D
                    ↑ new commit

Local:  A - B - C
                ↑ you are here

After pull: A - B - C - D
                        ↑ now up to date
```

## 🆚 git pull vs git pull --rebase

| | `git pull` | `git pull --rebase` |
|---|---|---|
| Method | fetch + merge | fetch + rebase |
| History | Creates merge commit | Linear, no merge commit |
| Best for | Team branches | Personal/feature branches |

## ⚠️ Common Mistakes
- Pulling without committing local changes first — can cause unexpected conflicts
- Always pulling into `main` directly instead of reviewing changes with `git fetch` first
- Not pulling before pushing — leads to rejected pushes

## 🔗 Related Commands
- [`git fetch`](./fetch.md)
- [`git merge`](../03-branching-and-merging/merge.md)
- [`git push`](./push.md)
- [`git stash`](../05-undoing-changes/stash.md)
