# 🐙 Git-Github-Commands

![GIT](https://img.shields.io/badge/GIT-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GITHUB-181717?style=for-the-badge&logo=github&logoColor=white)
![License](https://img.shields.io/badge/LICENSE-MIT-green?style=for-the-badge)
![MIT](https://img.shields.io/badge/MIT-yellow?style=for-the-badge)

> The complete guide to Git and GitHub commands with practical usage examples, real-world workflows, and detailed explanations.

---

## 📌 What's Inside

A comprehensive reference guide for **35+ Git commands** and **GitHub features** — organized by category, from beginner basics to advanced workflows. Each command has its own dedicated file with syntax, real examples, comparisons, and common mistakes.

**Plus:**
- 🗒️ **Cheatsheet** — all commands on one page
- ⚖️ **Comparisons** — merge vs rebase, reset vs revert, and more
- 🔄 **Workflows** — 10 real-world step-by-step guides
- 📖 **Glossary** — 50+ Git terms explained simply
- 🤝 **Contributing** — how to contribute

---

## 📂 Repository Structure

```
Git-Github-Commands/
│
├── 📁 git/                                 # 35 Git commands
│   ├── overview.MD                        # Git theory & concepts
│   ├── 📁 01-setup/                       # config, init, clone, help
│   ├── 📁 02-staging-and-committing/      # add, commit, status, diff, mv, rm
│   ├── 📁 03-branching-and-merging/       # branch, checkout, switch, merge, rebase, cherry-pick, tag
│   ├── 📁 04-remote-workflow/             # remote, push, pull, fetch, submodule
│   ├── 📁 05-undoing-changes/             # reset, revert, restore, stash, clean
│   ├── 📁 06-inspection-and-history/      # log, show, blame, bisect, shortlog
│   ├── 📁 07-advanced/                    # reflog, worktree, archive, gc, hooks
│   └── 📁 08-patching/                    # apply, format-patch, am
│
├── 📁 github/                             # GitHub features & workflows
│   ├── 📁 01-github-basics/               # fork, PR, issues, stars, profile README
│   ├── 📁 02-github-cli/                  # gh auth, gh repo, gh pr, gh issue, gh gist
│   └── 📁 03-github-actions/              # overview, workflow syntax, workflows
│
├── 🗒️ CHEATSHEET.md                       # Quick reference — all commands
├── ⚖️ COMPARISONS.md                       # 10 command comparisons
├── 🔄 WORKFLOWS.md                        # 10 real-world workflows
├── 📖 GLOSSARY.md                         # Git terminology
├── 🤝 CONTRIBUTING.md                     # How to contribute
├── .gitignore
├── LICENSE
└── README.md
```

---

## ⚡ Quick Access

| Resource | What it's for |
|---|---|
| [🗒️ CHEATSHEET.md](./CHEATSHEET.md) | **All commands in one page** — bookmark this! |
| [⚖️ COMPARISONS.md](./COMPARISONS.md) | merge vs rebase, reset vs revert, fetch vs pull |
| [🔄 WORKFLOWS.md](./WORKFLOWS.md) | 10 real-world step-by-step workflows |
| [📖 GLOSSARY.md](./GLOSSARY.md) | Git terminology explained simply |
| [📚 Git Overview](./git/overview.MD) | Concepts, architecture, internals |

---

## 🚀 Git Commands Reference

### 📁 01 — Setup
| Command | Description |
|---|---|
| [`git config`](./git/01-setup/config.md) | Set username, email, editor, aliases |
| [`git init`](./git/01-setup/init.md) | Initialize a new repository |
| [`git clone`](./git/01-setup/clone.md) | Copy a remote repo locally |
| [`git help`](./git/01-setup/help.md) | Get help for any command |

**→ [View full 01-setup folder](./git/01-setup/)**

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

**→ [View full 02-staging-and-committing folder](./git/02-staging-and-committing/)**

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

**→ [View full 03-branching-and-merging folder](./git/03-branching-and-merging/)**

---

### 📁 04 — Remote Workflows
| Command | Description |
|---|---|
| [`git remote`](./git/04-remote-workflow/remote.md) | Manage remote connections |
| [`git push`](./git/04-remote-workflow/push.md) | Upload commits to remote |
| [`git pull`](./git/04-remote-workflow/pull.md) | Download and merge from remote |
| [`git fetch`](./git/04-remote-workflow/fetch.md) | Download without merging |
| [`git submodule`](./git/04-remote-workflow/submodule.md) | Manage nested repositories |

**→ [View full 04-remote-workflow folder](./git/04-remote-workflow/)**

---

### 📁 05 — Undoing Changes
| Command | Description |
|---|---|
| [`git reset`](./git/05-undoing-changes/reset.md) | Undo commits or unstage files |
| [`git revert`](./git/05-undoing-changes/revert.md) | Safely undo a pushed commit |
| [`git restore`](./git/05-undoing-changes/restore.md) | Discard working directory changes |
| [`git stash`](./git/05-undoing-changes/stash.md) | Temporarily save uncommitted work |
| [`git clean`](./git/05-undoing-changes/clean.md) | Remove untracked files |

**→ [View full 05-undoing-changes folder](./git/05-undoing-changes/)**

---

### 📁 06 — Inspection & History
| Command | Description |
|---|---|
| [`git log`](./git/06-inspection-and-history/log.md) | View commit history |
| [`git show`](./git/06-inspection-and-history/show.md) | Inspect a specific commit |
| [`git blame`](./git/06-inspection-and-history/blame.md) | See who changed each line |
| [`git bisect`](./git/06-inspection-and-history/bisect.md) | Find the commit that introduced a bug |
| [`git shortlog`](./git/06-inspection-and-history/shortlog.md) | Summarized commit history by author |

**→ [View full 06-inspection-and-history folder](./git/06-inspection-and-history/)**

---

### 📁 07 — Advanced
| Command | Description |
|---|---|
| [`git reflog`](./git/07-advanced/reflog.md) | Recover lost commits |
| [`git worktree`](./git/07-advanced/worktree.md) | Work on multiple branches simultaneously |
| [`git archive`](./git/07-advanced/archive.md) | Export repo as zip or tar |
| [`git gc`](./git/07-advanced/gc.md) | Clean up and optimize repository |
| [`git hooks`](./git/07-advanced/hooks.md) | Automate actions on Git events |

**→ [View full 07-advanced folder](./git/07-advanced/)**

---

### 📁 08 — Patching
| Command | Description |
|---|---|
| [`git apply`](./git/08-patching/apply.md) | Apply a patch file |
| [`git format-patch`](./git/08-patching/format-patch.md) | Create patch files from commits |
| [`git am`](./git/08-patching/am.md) | Apply patch preserving author info |

**→ [View full 08-patching folder](./git/08-patching/)**

---

## 🐙 GitHub Reference

### 📁 01 — GitHub Basics
| Topic | Description |
|---|---|
| [Fork](./github/01-github-basics/fork.md) | Copy someone's repo to your account |
| [Pull Request](./github/01-github-basics/pull-request.md) | Propose and review code changes |
| [Issues](./github/01-github-basics/issues.md) | Track bugs, features, and tasks |
| [Stars & Watch](./github/01-github-basics/star-and-watch.md) | Bookmark repos and manage notifications |
| [Profile README](./github/01-github-basics/profile-readme.md) | Set up your GitHub profile page |

**→ [View full 01-github-basics folder](./github/01-github-basics/)**

---

### 📁 02 — GitHub CLI (`gh`)
| Command | Description |
|---|---|
| [`gh auth`](./github/02-github-cli/gh-auth.md) | Login and authenticate with GitHub |
| [`gh repo`](./github/02-github-cli/gh-repo.md) | Create, clone, fork repos from terminal |
| [`gh pr`](./github/02-github-cli/gh-pr.md) | Create and manage Pull Requests |
| [`gh issue`](./github/02-github-cli/gh-issue.md) | Create and manage Issues |
| [`gh gist`](./github/02-github-cli/gh-gist.md) | Create and manage Gists |

**→ [View full 02-github-cli folder](./github/02-github-cli/)**

---

### 📁 03 — GitHub Actions
| Topic | Description |
|---|---|
| [Overview](./github/03-github-actions/overview.md) | What Actions is and how it works |
| [Workflow Syntax](./github/03-github-actions/workflow-syntax.md) | Complete YAML syntax reference |
| [Common Workflows](./github/03-github-actions/common-workflows.md) | 8 ready-to-use workflow examples |

**→ [View full 03-github-actions folder](./github/03-github-actions/)**

---

## 📖 Learning Path

### 🔰 Beginner
1. Start with [Git Overview](./git/overview.MD) — understand concepts
2. Go through [01-setup](./git/01-setup/) — configure Git
3. Master [02-staging-and-committing](./git/02-staging-and-committing/) — daily workflow
4. Learn [03-branching-and-merging](./git/03-branching-and-merging/) — work with branches

### 📈 Intermediate
5. Study [04-remote-workflow](./git/04-remote-workflow/) — collaborate with others
6. Explore [COMPARISONS.md](./COMPARISONS.md) — understand trade-offs
7. Read [WORKFLOWS.md](./WORKFLOWS.md) — real-world scenarios
8. Learn [GitHub Basics](./github/01-github-basics/) — platform features

### 🚀 Advanced
9. Master [05-undoing-changes](./git/05-undoing-changes/) — recover from mistakes
10. Dive into [07-advanced](./git/07-advanced/) — power features
11. Master [GitHub CLI](./github/02-github-cli/) — terminal workflow
12. Setup [GitHub Actions](./github/03-github-actions/) — automation

---

## 🛠️ How to Use

### Clone the repo
```bash
git clone https://github.com/Ankit-Tank/Git-Github-Commands.git
cd Git-Github-Commands
```

### Quick lookup
- **Need a command fast?** → [CHEATSHEET.md](./CHEATSHEET.md)
- **Confused about two similar commands?** → [COMPARISONS.md](./COMPARISONS.md)
- **Need a step-by-step guide?** → [WORKFLOWS.md](./WORKFLOWS.md)
- **Don't know what a term means?** → [GLOSSARY.md](./GLOSSARY.md)

### Browse by category
Each subfolder (like `git/01-setup/`) has an `_index.md` file with a quick overview and command list.

---

## 🤝 Contributing

Found a mistake or want to add a command?

1. Fork this repo
2. Create a branch: `git switch -c add-new-command`
3. Follow the template in [CONTRIBUTING.md](./CONTRIBUTING.md)
4. Submit a Pull Request

See [CONTRIBUTING.md](./CONTRIBUTING.md) for full guidelines.

---

## 📊 What's Inside

- **35+ Git commands** with detailed explanations
- **10 GitHub features** covered
- **5 reference files** (Cheatsheet, Comparisons, Workflows, Glossary, Contributing)
- **100+ practical examples**
- **Real-world workflows** for common scenarios

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">
  
**⭐ Star this repo if you find it helpful!**

Made with ❤️ by [Ankit-Tank](https://github.com/Ankit-Tank)

[⬆️ Back to top](#-git-github-commands)

</div>
