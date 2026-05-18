# 🔧 07 — Advanced

Power-user Git commands for recovery, optimization, and automation.

---

## 📄 Commands in This Folder

| Command | File | Description |
|---|---|---|
| `git reflog` | [reflog.md](./reflog.md) | View all HEAD movements — recover lost commits |
| `git worktree` | [worktree.md](./worktree.md) | Check out multiple branches simultaneously |
| `git archive` | [archive.md](./archive.md) | Export repo as zip or tar without `.git/` |
| `git gc` | [gc.md](./gc.md) | Clean and optimize repository storage |
| `git hooks` | [hooks.md](./hooks.md) | Automate tasks on Git events |

---

## 💡 When to Use These

| Situation | Command |
|---|---|
| Lost commits after reset/rebase | `git reflog` |
| Need to work on two branches at once | `git worktree` |
| Share code without `.git/` history | `git archive` |
| Repo feels slow or `.git/` is huge | `git gc` |
| Auto-run tests before every commit | `git hooks` (pre-commit) |

---

> ⬅️ [06 — Inspection & History](../06-inspection-and-history/) | ➡️ [08 — Patching](../08-patching/)
