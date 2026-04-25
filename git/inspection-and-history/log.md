# git log

## 📌 What it does
Displays the commit history of a repository — who made changes, when, and what the commit messages say.

## 🔧 Syntax
```bash
git log [options]
```

## ✅ Examples

### Basic log
```bash
git log
```

### Compact one-line per commit
```bash
git log --oneline
```

### Visual branch graph
```bash
git log --oneline --graph --all
```

### Show last N commits
```bash
git log -5
git log -10 --oneline
```

### Log with file changes summary
```bash
git log --stat
```

### Log with full diff
```bash
git log -p
```

### Filter by author
```bash
git log --author="Ankit"
```

### Filter by date
```bash
git log --after="2024-01-01"
git log --before="2024-12-31"
git log --after="2024-01-01" --before="2024-06-30"
```

### Filter by keyword in commit message
```bash
git log --grep="login"
```

### Log for a specific file
```bash
git log -- index.html
```

### Pretty custom format
```bash
git log --pretty=format:"%h - %an - %ar - %s"
```

## 📋 Format Placeholders

| Placeholder | Meaning |
|---|---|
| `%h` | Short commit hash |
| `%H` | Full commit hash |
| `%an` | Author name |
| `%ae` | Author email |
| `%ar` | Relative date (e.g., "2 days ago") |
| `%ad` | Absolute date |
| `%s` | Commit subject (message) |

## 🎨 Useful Alias

Add this to your git config for a beautiful log:

```bash
git config --global alias.lg "log --oneline --graph --all --decorate"
git lg
```

## ⚠️ Common Mistakes
- Running plain `git log` on a large repo — gets overwhelming. Use `--oneline` and filters.
- Forgetting `--all` in `--graph` — misses other branches

## 🔗 Related Commands
- [`git show`](./show.md)
- [`git diff`](../02-staging-and-committing/diff.md)
- [`git blame`](./blame.md)
- [`git reflog`](../07-advanced/reflog.md)
