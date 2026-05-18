# 🌿 03 — Branching & Merging

Commands for creating branches, switching between them, and combining work.

---

## 📄 Commands in This Folder

| Command | File | Description |
|---|---|---|
| `git branch` | [branch.md](./branch.md) | Create, list, rename, delete branches |
| `git checkout` | [checkout.md](./checkout.md) | Switch branches or restore files (classic) |
| `git switch` | [switch.md](./switch.md) | Switch branches (modern, recommended) |
| `git merge` | [merge.md](./merge.md) | Combine a branch into current branch |
| `git rebase` | [rebase.md](./rebase.md) | Rewrite commits onto another branch |
| `git cherry-pick` | [cherry-pick.md](./cherry-pick.md) | Apply a specific commit to current branch |
| `git tag` | [tag.md](./tag.md) | Mark release versions |

---

## 🔄 Typical Branching Workflow

```
git switch main
git switch -c feature/login     ← create branch
  ... make commits ...
git switch main
git merge feature/login         ← merge back
git branch -d feature/login     ← clean up
```

---

## 🆚 Key Decision: merge vs rebase?
See [COMPARISONS.md](../../../COMPARISONS.md#1-merge-vs-rebase)

---

> ⬅️ [02 — Staging & Committing](../02-staging-and-committing/) | ➡️ [04 — Remote Workflows](../04-remote-workflow/)
