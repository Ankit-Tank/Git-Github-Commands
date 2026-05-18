# 🔍 06 — Inspection & History

Commands for reading commit history, examining changes, and finding bugs.

---

## 📄 Commands in This Folder

| Command | File | Description |
|---|---|---|
| `git log` | [log.md](./log.md) | Browse full commit history |
| `git show` | [show.md](./show.md) | Inspect a specific commit in detail |
| `git blame` | [blame.md](./blame.md) | See who last changed each line of a file |
| `git bisect` | [bisect.md](./bisect.md) | Binary search to find which commit introduced a bug |
| `git shortlog` | [shortlog.md](./shortlog.md) | Summarized commit history grouped by author |

---

## 🔄 Common Inspection Scenarios

```bash
# View recent history
git log --oneline --graph --all

# Find who changed line 42
git blame src/app.py -L 42,42

# Find which commit introduced a bug
git bisect start
git bisect bad
git bisect good v1.0.0

# See full details of a commit
git show abc123
```

---

> ⬅️ [05 — Undoing Changes](../05-undoing-changes/) | ➡️ [07 — Advanced](../07-advanced/)
