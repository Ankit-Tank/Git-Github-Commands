# ☁️ 04 — Remote Workflows

Commands for connecting to and syncing with remote repositories on GitHub, GitLab, or Bitbucket.

---

## 📄 Commands in This Folder

| Command | File | Description |
|---|---|---|
| `git remote` | [remote.md](./remote.md) | Add, remove, rename remote connections |
| `git push` | [push.md](./push.md) | Upload local commits to remote |
| `git pull` | [pull.md](./pull.md) | Download and merge remote changes |
| `git fetch` | [fetch.md](./fetch.md) | Download remote changes without merging |
| `git submodule` | [submodule.md](./submodule.md) | Manage nested repositories |

---

## 🔄 Remote Sync Flow

```
git fetch origin          ← download safely
git diff main origin/main ← review changes
git merge origin/main     ← apply when ready

OR simply:
git pull                  ← fetch + merge in one step
```

---

## 🆚 Key Decision: fetch vs pull?
See [COMPARISONS.md](../../../COMPARISONS.md#3-fetch-vs-pull)

---

> ⬅️ [03 — Branching & Merging](../03-branching-and-merging/) | ➡️ [05 — Undoing Changes](../05-undoing-changes/)
