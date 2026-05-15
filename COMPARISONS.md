# ⚖️ Git Comparisons

> The most googled Git questions — all answered with side-by-side comparisons.

---

## 1. `merge` vs `rebase`

| | `git merge` | `git rebase` |
|---|---|---|
| History | Preserves full branch history | Rewrites history linearly |
| Merge commit | ✅ Creates one | ❌ No merge commit |
| Safe on shared branches | ✅ Yes | ❌ No — rewrites hashes |
| Best for | Team branches, `main` | Personal feature branches |
| Readability | Shows exactly what happened | Cleaner, linear timeline |

### Merge result:
```
main:    A - B - C ------- M
                  \       /
feature:           D - E -
```

### Rebase result:
```
main:    A - B - C - D' - E'
```

> ✅ **Rule:** Use `merge` for shared branches. Use `rebase` to clean up before merging a feature branch.

---

## 2. `reset` vs `revert` vs `restore`

| | `git reset` | `git revert` | `git restore` |
|---|---|---|---|
| What it targets | Commits | Commits | Files |
| How it undoes | Moves HEAD backward | Creates new undo commit | Discards file changes |
| Modifies history | ✅ Yes | ❌ No | N/A |
| Safe for pushed commits | ❌ No | ✅ Yes | ✅ Yes |
| Recoverable | Via reflog | Yes (new commit exists) | ❌ No |

### When to use each:
```bash
git restore file.html        # discard unsaved edits in a file
git reset --soft HEAD~1      # undo last commit, keep changes staged
git reset --hard HEAD~1      # undo last commit, DELETE everything ⚠️
git revert abc123            # undo a commit that's already pushed
```

---

## 3. `fetch` vs `pull`

| | `git fetch` | `git pull` |
|---|---|---|
| Downloads from remote | ✅ Yes | ✅ Yes |
| Merges into current branch | ❌ No | ✅ Yes |
| Safe to run anytime | ✅ Yes | ⚠️ Can cause conflicts |
| Updates working files | ❌ No | ✅ Yes |
| Best for | Reviewing before merging | Quick sync when you trust the remote |

```bash
# Safe approach — fetch first, review, then merge
git fetch origin
git diff main origin/main   # see what's different
git merge origin/main       # merge when ready

# Quick approach
git pull                    # fetch + merge in one step
```

---

## 4. `checkout` vs `switch` vs `restore`

Git 2.23 split the overloaded `git checkout` into two focused commands:

| Task | Old (`checkout`) | New (recommended) |
|---|---|---|
| Switch branch | `git checkout main` | `git switch main` |
| Create + switch | `git checkout -b feat` | `git switch -c feat` |
| Restore file | `git checkout -- file` | `git restore file` |
| Unstage file | `git reset HEAD file` | `git restore --staged file` |
| Detached HEAD | `git checkout abc123` | `git switch --detach abc123` |

> ✅ **Prefer** `git switch` for branches and `git restore` for files — they're clearer and purpose-built.

---

## 5. `git add .` vs `git add -A` vs `git add -u`

| | `git add .` | `git add -A` | `git add -u` |
|---|---|---|---|
| New files | ✅ | ✅ | ❌ |
| Modified files | ✅ | ✅ | ✅ |
| Deleted files | ✅ (Git 2.x) | ✅ | ✅ |
| Scope | Current directory | Entire repo | Entire repo |

> ✅ In Git 2.x+, `git add .` and `git add -A` behave identically when run from repo root.

---

## 6. `clone` vs `fork`

| | `git clone` | Fork (GitHub) |
|---|---|---|
| Where it lives | Your local machine | Your GitHub account |
| Connected to original | Only if configured | ✅ Automatically (upstream) |
| Used for | Working locally | Contributing to others' repos |
| Done via | Terminal | GitHub UI |
| Can open PR to original | ❌ Not directly | ✅ Yes |

```
Fork → Clone → Make changes → Push to fork → Open PR to original
```

---

## 7. `merge --ff` vs `merge --no-ff` vs `merge --squash`

| | `--ff` (fast-forward) | `--no-ff` | `--squash` |
|---|---|---|---|
| Merge commit | ❌ Not created | ✅ Always created | ❌ Not created |
| History | Linear | Shows branch structure | Linear + clean |
| Original commits | Preserved | Preserved | Combined into one |
| Best for | Simple linear branches | Keeping branch history visible | Cleaning up messy commits |

```bash
git merge --ff feature        # fast-forward if possible
git merge --no-ff feature     # always create merge commit
git merge --squash feature    # combine all commits into one
```

---

## 8. `stash pop` vs `stash apply`

| | `git stash pop` | `git stash apply` |
|---|---|---|
| Applies stash | ✅ Yes | ✅ Yes |
| Removes from stash list | ✅ Yes | ❌ No (keeps it) |
| Use when | You're done with the stash | You want to apply to multiple branches |

```bash
git stash pop          # apply + delete from stash list
git stash apply        # apply but keep in stash list
```

---

## 9. `git log` vs `git reflog`

| | `git log` | `git reflog` |
|---|---|---|
| Shows | Commit history | Every HEAD movement |
| Includes resets/rebases | ❌ No | ✅ Yes |
| Available remotely | ✅ Yes | ❌ Local only |
| Expires | Never | After 90 days |
| Best for | Reading history | Recovering lost commits |

---

## 10. Lightweight Tag vs Annotated Tag

| | Lightweight Tag | Annotated Tag |
|---|---|---|
| Command | `git tag v1.0` | `git tag -a v1.0 -m "msg"` |
| Stores | Commit pointer only | Author, date, message, checksum |
| Shows in `git show` | Just commit | Full tag info |
| Best for | Temporary marks | Official releases |

> ✅ Always use **annotated tags** for releases.

---

> 🗒️ Quick command reference → [CHEATSHEET.md](./CHEATSHEET.md)
> 📖 Terminology → [GLOSSARY.md](./GLOSSARY.md)
