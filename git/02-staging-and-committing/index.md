# 📋 02 — Staging & Committing

Commands for tracking changes, preparing snapshots, and saving them to history.

---

## 📄 Commands in This Folder

| Command | File | Description |
|---|---|---|
| `git add` | [add.md](./add.md) | Move changes to the staging area |
| `git commit` | [commit.md](./commit.md) | Save staged changes as a permanent snapshot |
| `git status` | [status.md](./status.md) | Check what's modified, staged, or untracked |
| `git diff` | [diff.md](./diff.md) | See exact line-by-line changes |
| `git mv` | [mv.md](./mv.md) | Rename or move tracked files |
| `git rm` | [rm.md](./rm.md) | Remove files from tracking |

---

## 🔄 How These Commands Fit Together

```
Edit files
    ↓
git status      ← see what changed
    ↓
git diff        ← review exact changes
    ↓
git add .       ← stage changes
    ↓
git commit -m   ← save snapshot
```

---

> ⬅️ [01 — Setup](../01-setup/) | ➡️ [03 — Branching & Merging](../03-branching-and-merging/)
