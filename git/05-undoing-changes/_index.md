# ↩️ 05 — Undoing Changes

Commands for reversing mistakes — from discarding file edits to recovering lost commits.

---

## 📄 Commands in This Folder

| Command | File | Description |
|---|---|---|
| `git reset` | [reset.md](./reset.md) | Undo commits or unstage files |
| `git revert` | [revert.md](./revert.md) | Safely undo a pushed commit |
| `git restore` | [restore.md](./restore.md) | Discard working directory changes |
| `git stash` | [stash.md](./stash.md) | Temporarily save uncommitted work |
| `git clean` | [clean.md](./clean.md) | Remove untracked files |

---

## 🚦 Which Command Should I Use?

| Situation | Command |
|---|---|
| Discard unsaved file changes | `git restore file` |
| Unstage a file | `git restore --staged file` |
| Undo last commit (keep changes) | `git reset --soft HEAD~1` |
| Undo last commit (delete changes) | `git reset --hard HEAD~1` ⚠️ |
| Undo a pushed commit safely | `git revert abc123` |
| Save work temporarily | `git stash` |
| Remove untracked files | `git clean -fd` ⚠️ |

---

## 🆚 Key Decision: reset vs revert vs restore?
See [COMPARISONS.md](../../../COMPARISONS.md#2-reset-vs-revert-vs-restore)

---

> ⬅️ [04 — Remote Workflows](../04-remote-workflows/) | ➡️ [06 — Inspection & History](../06-inspection-and-history/)
