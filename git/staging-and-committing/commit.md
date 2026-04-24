# git commit

## 📌 What it does
Saves a permanent snapshot of staged changes to the local repository with a descriptive message.

## 🔧 Syntax
```bash
git commit -m "message"
```

## ✅ Examples

### Basic commit with message
```bash
git commit -m "Add login page"
```

### Stage all tracked files and commit in one step
```bash
git commit -am "Fix navbar bug"
```

### Open editor to write detailed commit message
```bash
git commit
```

### Amend the last commit (message or files)
```bash
git commit --amend -m "Corrected commit message"
```

### Commit with no changes (empty commit)
```bash
git commit --allow-empty -m "Trigger CI pipeline"
```

## ✍️ Good Commit Message Format

```
<type>: <short summary>

[optional body explaining WHY, not WHAT]
```

### Common types:
| Type | When to use |
|---|---|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation changes |
| `style` | Formatting, no logic change |
| `refactor` | Code restructure |
| `test` | Adding tests |
| `chore` | Build tools, dependencies |

### Examples:
```
feat: add user authentication
fix: resolve null pointer in dashboard
docs: update README with setup steps
refactor: simplify payment logic
```

## 🔄 Commit Internals

Each commit stores:
- 📸 Snapshot of staged files
- 👤 Author name and email
- 🕐 Timestamp
- 💬 Commit message
- 🔗 Parent commit reference

## ⚠️ Common Mistakes
- Vague messages like `"fix"`, `"update"`, `"changes"`
- Committing too many unrelated changes at once
- Using `--amend` on commits already pushed to remote (rewrites history)

## 🔗 Related Commands
- [`git add`](./add.md)
- [`git status`](./status.md)
- [`git log`](../06-inspection-and-history/log.md)
- [`git reset`](../05-undoing-changes/reset.md)
