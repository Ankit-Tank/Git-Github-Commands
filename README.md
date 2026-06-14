<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=F05032&height=120&section=header&text=Git%20%26%20GitHub%20Commands&fontSize=40&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=The%20definitive%20developer%20reference%20—%20zero%20fluff&descAlignY=60&descAlign=50"/>

</div>

<div align="center">

[![Live Website](https://img.shields.io/badge/🌐%20Live%20Website-git--github--commands.netlify.app-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://git-github-commands.netlify.app/)
&nbsp;
[![GitHub Stars](https://img.shields.io/github/stars/Ankit-Tank/Git-Github-Commands?style=for-the-badge&logo=github&color=F05032)](https://github.com/Ankit-Tank/Git-Github-Commands/stargazers)
&nbsp;
[![License: MIT](https://img.shields.io/badge/License-MIT-F7DF1E?style=for-the-badge)](LICENSE)

<br/>

![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)
![Markdown](https://img.shields.io/badge/Markdown-000000?style=flat-square&logo=markdown&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)

<br/>

| 🔧 Git Commands | 🐙 GitHub Features | 💡 Real-world Examples | 📄 Total Files |
|:-:|:-:|:-:|:-:|
| **35+** | **17** | **100+** | **75+** |

</div>

---

## 📖 Table of Contents

- [✨ About](#-about)
- [⚡ Quick Access](#-quick-access)
- [📂 Repository Structure](#-repository-structure)
- [🔧 Git Commands Reference](#-git-commands-reference)
  - [01 · Setup](#-01--setup)
  - [02 · Staging & Committing](#-02--staging--committing)
  - [03 · Branching & Merging](#-03--branching--merging)
  - [04 · Remote Workflows](#-04--remote-workflows)
  - [05 · Undoing Changes](#-05--undoing-changes)
  - [06 · Inspection & History](#-06--inspection--history)
  - [07 · Advanced](#-07--advanced)
  - [08 · Patching](#-08--patching)
- [🐙 GitHub Reference](#-github-reference)
  - [01 · GitHub Basics](#-01--github-basics)
  - [02 · GitHub CLI](#-02--github-cli)
  - [03 · GitHub Actions](#-03--github-actions)
- [🗺️ Learning Path](#️-learning-path)
- [🛠️ How to Use](#️-how-to-use)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ About

> **A complete, structured reference for every Git command and GitHub feature a developer encounters** — from your very first `git init` to advanced CI/CD pipelines with GitHub Actions.

This isn't a dumbed-down tutorial or a vague cheat sheet. Every command lives in its **own dedicated file** with a consistent structure so you always know where to look:

```
📌 What it does  →  🔧 Syntax  →  ✅ Examples (beginner → advanced)
📋 Comparison tables  →  ⚠️ Common mistakes  →  🔗 Related commands
```

Browse it online at **[git-github-commands.netlify.app](https://git-github-commands.netlify.app/)** — fully formatted, searchable, and mobile-friendly. No cloning required.

---

## ⚡ Quick Access

> **The files you'll reach for most.** Bookmark these.

| Resource | Use it when… |
|:---------|:-------------|
| [📋 CHEATSHEET.md](./CHEATSHEET.md) | You need the right command, fast — all 35+ on one page |
| [⚖️ COMPARISONS.md](./COMPARISONS.md) | You're deciding between `merge vs rebase`, `reset vs revert`, `fetch vs pull` |
| [🔄 WORKFLOWS.md](./WORKFLOWS.md) | You want a step-by-step guide for a real scenario |
| [📖 GLOSSARY.md](./GLOSSARY.md) | A Git term is confusing you — 50+ terms explained plainly |
| [🗂️ Git Overview](./git/overview.MD) | You want to understand Git's internals before diving in |
| [🌐 Live Website](https://git-github-commands.netlify.app/) | You're on mobile or prefer a cleaner reading experience |

---

## 📂 Repository Structure

<details>
<summary><b>Click to expand the full folder tree</b></summary>

<br/>

```
Git-Github-Commands/
│
├── 📁 git/                                    # 35+ Git command files
│   ├── overview.MD                            # Git architecture, internals & mental models
│   │
│   ├── 📁 01-setup/
│   │   ├── _index.md
│   │   ├── config.md                          # Username, email, editor, aliases
│   │   ├── init.md                            # Initialize a repository
│   │   ├── clone.md                           # Copy remote repo locally
│   │   └── help.md                            # Get help for any command
│   │
│   ├── 📁 02-staging-and-committing/
│   │   ├── _index.md
│   │   ├── add.md                             # Stage changes
│   │   ├── commit.md                          # Save a snapshot
│   │   ├── status.md                          # Check working tree state
│   │   ├── diff.md                            # See line-by-line changes
│   │   ├── mv.md                              # Move/rename tracked files
│   │   └── rm.md                              # Remove files from tracking
│   │
│   ├── 📁 03-branching-and-merging/
│   │   ├── _index.md
│   │   ├── branch.md
│   │   ├── checkout.md
│   │   ├── switch.md
│   │   ├── merge.md
│   │   ├── rebase.md
│   │   ├── cherry-pick.md
│   │   └── tag.md
│   │
│   ├── 📁 04-remote-workflow/
│   │   ├── _index.md
│   │   ├── remote.md
│   │   ├── push.md
│   │   ├── pull.md
│   │   ├── fetch.md
│   │   └── submodule.md
│   │
│   ├── 📁 05-undoing-changes/
│   │   ├── _index.md
│   │   ├── reset.md
│   │   ├── revert.md
│   │   ├── restore.md
│   │   ├── stash.md
│   │   └── clean.md
│   │
│   ├── 📁 06-inspection-and-history/
│   │   ├── _index.md
│   │   ├── log.md
│   │   ├── show.md
│   │   ├── blame.md
│   │   ├── bisect.md
│   │   └── shortlog.md
│   │
│   ├── 📁 07-advanced/
│   │   ├── _index.md
│   │   ├── reflog.md
│   │   ├── worktree.md
│   │   ├── archive.md
│   │   ├── gc.md
│   │   └── hooks.md
│   │
│   └── 📁 08-patching/
│       ├── _index.md
│       ├── apply.md
│       ├── format-patch.md
│       └── am.md
│
├── 📁 github/
│   ├── overview.md
│   ├── 📁 01-github-basics/
│   │   ├── _index.md
│   │   ├── fork.md
│   │   ├── pull-request.md
│   │   ├── issues.md
│   │   └── star-and-watch.md
│   │
│   ├── 📁 02-github-cli/
│   │   ├── _index.md
│   │   ├── gh-auth.md
│   │   ├── gh-repo.md
│   │   ├── gh-pr.md
│   │   ├── gh-issus.md
│   │   └── gh-gist.md
│   │
│   └── 📁 03-github-actions/
│       ├── _index.md
│       ├── common-workflows.md
│       └── workflow-syntax.md
│
├── 🗒️  CHEATSHEET.md
├── ⚖️  COMPARISONS.md
├── 🔄  WORKFLOWS.md
├── 📖  GLOSSARY.md
├── 🤝  CONTRIBUTING.md
├── index.html
├── script.js
├── style.css
├── .gitignore
├── LICENSE
└── README.md
```

</details>

---

## 🔧 Git Commands Reference

### 📁 01 · Setup

> Configure Git and create your first repository. Start here if you're new — or revisit to set up aliases and editor config.

| Command | Description |
|:--------|:------------|
| [`git config`](./git/01-setup/config.md) | Set your name, email, default editor, and create shortcuts with aliases |
| [`git init`](./git/01-setup/init.md) | Initialize a new local repository in the current directory |
| [`git clone`](./git/01-setup/clone.md) | Copy a remote repository to your local machine |
| [`git help`](./git/01-setup/help.md) | Get documentation for any Git command |

→ **[Browse the 01-setup folder](./git/01-setup/)**

---

### 📁 02 · Staging & Committing

> The core loop every developer runs every single day. Learn to stage selectively, write clean commits, and inspect changes before you save them.

| Command | Description |
|:--------|:------------|
| [`git add`](./git/02-staging-and-committing/add.md) | Stage changes — whole files, specific lines, or interactive hunks |
| [`git commit`](./git/02-staging-and-committing/commit.md) | Save a permanent snapshot of staged changes to history |
| [`git status`](./git/02-staging-and-committing/status.md) | Check what's staged, unstaged, and untracked in your working tree |
| [`git diff`](./git/02-staging-and-committing/diff.md) | See exact line-by-line changes before committing |
| [`git mv`](./git/02-staging-and-committing/mv.md) | Move or rename tracked files while preserving history |
| [`git rm`](./git/02-staging-and-committing/rm.md) | Remove files from Git tracking (and optionally from disk) |

→ **[Browse the 02-staging-and-committing folder](./git/02-staging-and-committing/)**

---

### 📁 03 · Branching & Merging

> Where real collaboration happens. Understand branching deeply — including when to merge vs rebase, and how cherry-pick helps you apply individual commits across branches.

| Command | Description |
|:--------|:------------|
| [`git branch`](./git/03-branching-and-merging/branch.md) | Create, list, rename, and delete branches |
| [`git checkout`](./git/03-branching-and-merging/checkout.md) | Switch branches or restore files (the classic, multi-purpose command) |
| [`git switch`](./git/03-branching-and-merging/switch.md) | The modern, focused way to switch branches (recommended over checkout) |
| [`git merge`](./git/03-branching-and-merging/merge.md) | Combine two branches, preserving full history |
| [`git rebase`](./git/03-branching-and-merging/rebase.md) | Rewrite commit history for a clean, linear timeline |
| [`git cherry-pick`](./git/03-branching-and-merging/cherry-pick.md) | Apply one specific commit onto another branch |
| [`git tag`](./git/03-branching-and-merging/tag.md) | Mark release versions (`v1.0.0`, `v2.3.1`, etc.) permanently |

→ **[Browse the 03-branching-and-merging folder](./git/03-branching-and-merging/)**

---

### 📁 04 · Remote Workflows

> How your local code connects to the world. Push, pull, fetch, and manage remotes confidently — including nested repos with submodules.

| Command | Description |
|:--------|:------------|
| [`git remote`](./git/04-remote-workflow/remote.md) | Add, view, rename, and remove remote connections |
| [`git push`](./git/04-remote-workflow/push.md) | Upload local commits to a remote repository |
| [`git pull`](./git/04-remote-workflow/pull.md) | Download and automatically merge remote changes |
| [`git fetch`](./git/04-remote-workflow/fetch.md) | Download remote changes without merging (safe inspection first) |
| [`git submodule`](./git/04-remote-workflow/submodule.md) | Manage nested Git repositories inside your project |

→ **[Browse the 04-remote-workflow folder](./git/04-remote-workflow/)**

---

### 📁 05 · Undoing Changes

> Everyone breaks things. This is the most important section — understand these before you need them, not after.

| Command | Description |
|:--------|:------------|
| [`git reset`](./git/05-undoing-changes/reset.md) | Undo commits or unstage files — rewrites history, use with care |
| [`git revert`](./git/05-undoing-changes/revert.md) | Safely undo a pushed commit by creating a new commit that reverses it |
| [`git restore`](./git/05-undoing-changes/restore.md) | Discard working directory changes without touching history |
| [`git stash`](./git/05-undoing-changes/stash.md) | Temporarily shelve uncommitted work so you can switch context |
| [`git clean`](./git/05-undoing-changes/clean.md) | Remove untracked files and directories from your working tree |

→ **[Browse the 05-undoing-changes folder](./git/05-undoing-changes/)**

---

### 📁 06 · Inspection & History

> Understand exactly what happened, when, and by whom. These are your debugging and auditing tools.

| Command | Description |
|:--------|:------------|
| [`git log`](./git/06-inspection-and-history/log.md) | View and filter commit history with powerful formatting options |
| [`git show`](./git/06-inspection-and-history/show.md) | Inspect a specific commit's changes in full detail |
| [`git blame`](./git/06-inspection-and-history/blame.md) | See who last changed each line of a file and in which commit |
| [`git bisect`](./git/06-inspection-and-history/bisect.md) | Binary search through history to pinpoint when a bug was introduced |
| [`git shortlog`](./git/06-inspection-and-history/shortlog.md) | Summarize commit history by author — great for changelogs |

→ **[Browse the 06-inspection-and-history folder](./git/06-inspection-and-history/)**

---

### 📁 07 · Advanced

> Power tools for power users. Most developers never explore these — the ones who do have a real edge.

| Command | Description |
|:--------|:------------|
| [`git reflog`](./git/07-advanced/reflog.md) | Recover "lost" commits — your ultimate safety net when things go wrong |
| [`git worktree`](./git/07-advanced/worktree.md) | Check out multiple branches simultaneously in separate directories |
| [`git archive`](./git/07-advanced/archive.md) | Export the repo or a subdirectory as a `.zip` or `.tar.gz` |
| [`git gc`](./git/07-advanced/gc.md) | Run garbage collection to clean up and optimize the repository |
| [`git hooks`](./git/07-advanced/hooks.md) | Automate custom scripts on Git events (pre-commit, post-merge, etc.) |

→ **[Browse the 07-advanced folder](./git/07-advanced/)**

---

### 📁 08 · Patching

> File-based and email-based patch workflows. Essential for contributing to open-source projects that use mailing lists (like the Linux kernel).

| Command | Description |
|:--------|:------------|
| [`git apply`](./git/08-patching/apply.md) | Apply changes from a `.patch` file to your working tree |
| [`git format-patch`](./git/08-patching/format-patch.md) | Create `.patch` files from commits — ready to email or share |
| [`git am`](./git/08-patching/am.md) | Apply a mailbox patch file, preserving the original author's info |

→ **[Browse the 08-patching folder](./git/08-patching/)**

---

## 🐙 GitHub Reference

### 📁 01 · GitHub Basics

> The platform features every developer uses on a daily basis.

| Topic | Description |
|:------|:------------|
| [🍴 Fork](./github/01-github-basics/fork.md) | Copy someone's repository to your account to propose changes |
| [🔀 Pull Request](./github/01-github-basics/pull-request.md) | Propose, review, discuss, and merge code changes |
| [🐛 Issues](./github/01-github-basics/issues.md) | Track bugs, features, and open-ended discussions |
| [⭐ Stars & Watch](./github/01-github-basics/star-and-watch.md) | Bookmark interesting repos and manage your notification feed |

→ **[Browse the 01-github-basics folder](./github/01-github-basics/)**

---

### 📁 02 · GitHub CLI

> Do everything GitHub can do — right from your terminal. Never leave your editor.

| Command | Description |
|:--------|:------------|
| [`gh auth`](./github/02-github-cli/gh-auth.md) | Authenticate with GitHub and manage credentials |
| [`gh repo`](./github/02-github-cli/gh-repo.md) | Create, clone, fork, and manage repositories from the terminal |
| [`gh pr`](./github/02-github-cli/gh-pr.md) | Create, review, and merge Pull Requests without leaving the CLI |
| [`gh issue`](./github/02-github-cli/gh-issus.md) | Create, assign, and manage Issues from your terminal |
| [`gh gist`](./github/02-github-cli/gh-gist.md) | Create and share code snippets via GitHub Gists |

→ **[Browse the 02-github-cli folder](./github/02-github-cli/)**

---

### 📁 03 · GitHub Actions

> Automate everything — tests, deployments, releases, code quality checks, and more. Includes 8 ready-to-use workflow templates you can copy directly into your project.

| Topic | Description |
|:------|:------------|
| [🔍 Workflow Syntax](./github/03-github-actions/workflow-syntax.md) | Complete YAML syntax reference — triggers, jobs, steps, secrets |
| [⚙️ Common Workflows](./github/03-github-actions/common-workflows.md) | 8 battle-tested, copy-paste ready workflows for real projects |

→ **[Browse the 03-github-actions folder](./github/03-github-actions/)**

---

## 🗺️ Learning Path

> Not sure where to start? Follow this sequence for the most efficient progression from zero to advanced.

```
╔══════════════════════════════════════════════════════════════╗
║  🔰  BEGINNER                                                ║
╠══════════════════════════════════════════════════════════════╣
║  1. git/overview.MD     — Understand how Git actually works  ║
║  2. 01-setup            — Configure Git on your machine      ║
║  3. 02-staging          — Master the daily add → commit loop ║
║  4. 03-branching        — Work with branches safely          ║
╚══════════════════════════════════════════════════════════════╝
                           ↓
╔══════════════════════════════════════════════════════════════╗
║  📈  INTERMEDIATE                                            ║
╠══════════════════════════════════════════════════════════════╣
║  5. 04-remote           — Collaborate with a team           ║
║  6. COMPARISONS.md      — Learn the trade-offs              ║
║  7. WORKFLOWS.md        — Apply to real-world scenarios      ║
║  8. GitHub Basics       — Master the platform itself         ║
╚══════════════════════════════════════════════════════════════╝
                           ↓
╔══════════════════════════════════════════════════════════════╗
║  🚀  ADVANCED                                                ║
╠══════════════════════════════════════════════════════════════╣
║  9.  05-undoing         — Recover from any mistake           ║
║  10. 07-advanced        — Unlock Git's power features        ║
║  11. GitHub CLI         — Go fully terminal-native           ║
║  12. GitHub Actions     — Build complete CI/CD pipelines     ║
╚══════════════════════════════════════════════════════════════╝
```

---

## 🛠️ How to Use

**Option 1 — Browse Online** *(no setup required)*

The live site is fully formatted, searchable, and works great on mobile:

```
https://git-github-commands.netlify.app/
```

**Option 2 — Clone Locally**

```bash
git clone https://github.com/Ankit-Tank/Git-Github-Commands.git
cd Git-Github-Commands
```

**Quick lookup guide**

```bash
# Need a command fast?         →  CHEATSHEET.md
# Comparing similar commands?  →  COMPARISONS.md
# Need a step-by-step guide?   →  WORKFLOWS.md
# Confused by a Git term?      →  GLOSSARY.md
# Starting from scratch?       →  git/overview.MD
```

Each subfolder has an `_index.md` that maps every command in that section, explains how they relate, and links you to the right file.

---

## 🤝 Contributing

Found a mistake? Want to improve an explanation or add a missing command? Contributions are welcome.

```bash
# 1. Fork this repository on GitHub

# 2. Create a branch for your change
git switch -c docs/improve-rebase-explanation

# 3. Make your changes following the existing file template

# 4. Commit with a clear, conventional message
git commit -m "docs: add visual diagram to git rebase"

# 5. Push and open a Pull Request
git push origin docs/improve-rebase-explanation
```

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full file template, style guide, and review process.

---

## 📄 License

Licensed under the [MIT License](LICENSE) — free to use, share, and adapt with attribution.

---

<div align="center">

[![Stars](https://img.shields.io/github/stars/Ankit-Tank/Git-Github-Commands?style=social)](https://github.com/Ankit-Tank/Git-Github-Commands/stargazers)
&nbsp;
[![Forks](https://img.shields.io/github/forks/Ankit-Tank/Git-Github-Commands?style=social)](https://github.com/Ankit-Tank/Git-Github-Commands/network/members)
&nbsp;
[![Watchers](https://img.shields.io/github/watchers/Ankit-Tank/Git-Github-Commands?style=social)](https://github.com/Ankit-Tank/Git-Github-Commands/watchers)

<br/>

**If this saved you time, a ⭐ star keeps the project going.**

<br/>

Made with ❤️ by [Ankit-Tank](https://github.com/Ankit-Tank)

<br/>

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=F05032&height=80&section=footer"/>

</div>