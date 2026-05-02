# 🐙 Git-Github-Commands

![GIT](https://img.shields.io/badge/GIT-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GITHUB-181717?style=for-the-badge&logo=github&logoColor=white)
![License](https://img.shields.io/badge/LICENSE-MIT-green?style=for-the-badge)
![MIT](https://img.shields.io/badge/MIT-yellow?style=for-the-badge)

> Handy guide to Git and GitHub commands with practical usage examples.

---

## 📌 What's Inside

A complete reference guide for Git and GitHub commands — organized by category, from beginner basics to advanced workflows. Each command has its own dedicated file with syntax, real examples, comparisons, and common mistakes.

---

## 📂 Repository Structure

```
Git-Github-Commands/
│
├── 📁 git/
│   ├── overview.MD                        # Git theory & concepts
│   ├── 📁 01-setup/                       # config, init, clone, help
│   ├── 📁 02-staging-and-committing/      # add, commit, status, diff, mv, rm
│   ├── 📁 03-branching-and-merging/       # branch, checkout, switch, merge, rebase, cherry-pick, tag
│   ├── 📁 04-remote-workflows/            # remote, push, pull, fetch, submodule
│   ├── 📁 05-undoing-changes/             # reset, revert, restore, stash, clean
│   ├── 📁 06-inspection-and-history/      # log, show, blame, bisect, shortlog
│   ├── 📁 07-advanced/                    # reflog, worktree, archive, gc, hooks
│   └── 📁 08-patching/                    # apply, format-patch, am
│
├── 📁 github/                             # coming soon 🚧
├── LICENSE
└── README.md
```

---

## 🚀 Git Commands Reference

### 📁 01 — Setup
| Command | Description |
|---|---|
| [`git config`](./git/01-setup/config.md) | Set username, email, editor, aliases |
| [`git init`](./git/01-setup/init.md) | Initialize a new repository |
| [`git clone`](./git/01-setup/clone.md) | Copy a remote repo locally |
| [`git help`](./git/01-setup/help.md) | Get help for any command |

---

### 📁 02 — Staging & Committing
| Command | Description |
|---|---|
| [`git add`](./git/02-staging-and-committing/add.md) | Stage changes for commit |
| [`git commit`](./git/02-staging-and-committing/commit.md) | Save a snapshot to history |
| [`git status`](./git/02-staging-and-committing/status.md) | Check working tree state |
| [`git diff`](./git/02-staging-and-committing/diff.md) | See line-by-line changes |
| [`git mv`](./git/02-staging-and-committing/mv.md) | Move or rename tracked files |
| [`git rm`](./git/02-staging-and-committing/rm.md) | Remove files from tracking |

---

### 📁 03 — Branching & Merging
| Command | Description |
|---|---|
| [`git branch`](./git/03-branching-and-merging/branch.md) | Create, list, delete branches |
| [`git checkout`](./git/03-branching-and-merging/checkout.md) | Switch branches or restore files |
| [`git switch`](./git/03-branching-and-merging/switch.md) | Modern way to switch branches |
| [`git merge`](./git/03-branching-and-merging/merge.md) | Combine branches |
| [`git rebase`](./git/03-branching-and-merging/rebase.md) | Rewrite history linearly |
| [`git cherry-pick`](./git/03-branching-and-merging/cherry-pick.md) | Apply a specific commit |
| [`git tag`](./git/03-branching-and-merging/tag.md) | Mark release versions |

---

### 📁 04 — Remote Workflows
| Command | Description |
|---|---|
| [`git remote`](./git/04-remote-workflows/remote.md) | Manage remote connections |
| [`git push`](./git/04-remote-workflows/push.md) | Upload commits to remote |
| [`git pull`](./git/04-remote-workflows/pull.md) | Download and merge from remote |
| [`git fetch`](./git/04-remote-workflows/fetch.md) | Download without merging |
| [`git submodule`](./git/04-remote-workflows/submodule.md) | Manage nested repositories |

---

### 📁 05 — Undoing Changes
| Command | Description |
|---|---|
| [`git reset`](./git/05-undoing-changes/reset.md) | Undo commits or unstage files |
| [`git revert`](./git/05-undoing-changes/revert.md) | Safely undo a pushed commit |
| [`git restore`](./git/05-undoing-changes/restore.md) | Discard working directory changes |
| [`git stash`](./git/05-undoing-changes/stash.md) | Temporarily save uncommitted work |
| [`git clean`](./git/05-undoing-changes/clean.md) | Remove untracked files |

---

### 📁 06 — Inspection & History
| Command | Description |
|---|---|
| [`git log`](./git/06-inspection-and-history/log.md) | View commit history |
| [`git show`](./git/06-inspection-and-history/show.md) | Inspect a specific commit |
| [`git blame`](./git/06-inspection-and-history/blame.md) | See who changed each line |
| [`git bisect`](./git/06-inspection-and-history/bisect.md) | Find the commit that introduced a bug |
| [`git shortlog`](./git/06-inspection-and-history/shortlog.md) | Summarized commit history by author |

---

### 📁 07 — Advanced
| Command | Description |
|---|---|
| [`git reflog`](./git/07-advanced/reflog.md) | Recover lost commits |
| [`git worktree`](./git/07-advanced/worktree.md) | Work on multiple branches simultaneously |
| [`git archive`](./git/07-advanced/archive.md) | Export repo as zip or tar |
| [`git gc`](./git/07-advanced/gc.md) | Clean up and optimize repository |
| [`git hooks`](./git/07-advanced/hooks.md) | Automate actions on Git events |

---

### 📁 08 — Patching
| Command | Description |
|---|---|
| [`git apply`](./git/08-patching/apply.md) | Apply a patch file |
| [`git format-patch`](./git/08-patching/format-patch.md) | Create patch files from commits |
| [`git am`](./git/08-patching/am.md) | Apply patch preserving author info |

---

## 📖 Git Theory

New to Git? Start with the theory guide before diving into commands:

👉 [Git Overview — Concepts, Architecture & Internals](./git/overview.MD)

Covers:
- What is Git and Version Control
- Centralized vs Distributed VCS
- Git Architecture (working dir → staging → local → remote)
- Internal object model (blobs, trees, commits)
- Branching models, merge vs rebase
- Git workflow lifecycle

---

## 🛠️ How to Use

Clone the repo and explore:

```bash
git clone https://github.com/Ankit-Tank/Git-Github-Commands.git
cd Git-Github-Commands
```

Navigate to any command file and read the explanation, syntax, and examples.

---

## 🚧 Coming Soon

- 📁 `github/` — GitHub-specific workflows
  - Forks, Pull Requests, Issues
  - GitHub CLI (`gh` commands)
  - GitHub Actions basics

---

## 🤝 Contributing

Found a mistake or want to add a command?

1. Fork this repo
2. Create a branch: `git checkout -b add-new-command`
3. Follow the command file template in each `.md` file
4. Submit a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">
  <sub>⭐ Star this repo if you find it helpful! | Made with ❤️ by <a href="https://github.com/Ankit-Tank">Ankit-Tank</a></sub>
</div>
