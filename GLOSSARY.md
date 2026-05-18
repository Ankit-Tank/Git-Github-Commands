# 📖 Git & GitHub Glossary

> 💡 Every term you'll encounter while using Git and GitHub — explained simply with examples.

---

```
A  B  C  D  F  G  H  I  L  M  O  P  R  S  T  U  W
```

---

## 🅐 — A

---

### 🏷️ Annotated Tag
> A tag that stores extra metadata — author, date, and message.

Unlike a lightweight tag, an annotated tag is a full Git object. Always use this for official releases.

```bash
git tag -a v1.0.0 -m "First stable release"
```
🔗 See → [`git tag`](./git/03-branching-and-merging/tag.md)

---

## 🅑 — B

---

### 🗄️ Bare Repository
> A repo with **no working directory** — contains only the `.git/` internals.

Used on servers and as remotes. You can't edit files directly in a bare repo.

```bash
git init --bare my-repo.git
```

---

### 💾 Blob
> Git's internal object for storing **raw file contents**.

Every version of every file is stored as a blob. Git identifies them by their SHA-1 hash, not their filename.

```
File content → hashed → stored as blob object
```

---

### 🌿 Branch
> A **lightweight movable pointer** to a commit.

Branches let you work independently without affecting the main codebase. Creating a branch in Git is nearly instant.

```bash
git switch -c feature/login    # create new branch
```
🔗 See → [`git branch`](./git/03-branching-and-merging/branch.md)

---

## 🅒 — C

---

### 🔄 Checkout
> Switching to a branch **or** restoring a file from history.

Modern Git splits this into two focused commands:

| Old | New |
|---|---|
| `git checkout main` | `git switch main` |
| `git checkout -- file` | `git restore file` |

🔗 See → [`git checkout`](./git/03-branching-and-merging/checkout.md)

---

### 🍒 Cherry-pick
> Applying a **specific commit** from one branch onto another — without merging the whole branch.

```bash
git cherry-pick abc123    # apply just this one commit
```
🔗 See → [`git cherry-pick`](./git/03-branching-and-merging/cherry-pick.md)

---

### ⚙️ CI/CD
> **Continuous Integration / Continuous Deployment** — automated pipelines that test and deploy code.

```
Push code → CI runs tests → CD deploys if tests pass
```

GitHub Actions is GitHub's built-in CI/CD platform.
🔗 See → [GitHub Actions](./github/03-github-actions/overview.md)

---

### 📋 Clone
> Creating a **complete local copy** of a remote repository — including all files, branches, and history.

```bash
git clone https://github.com/user/repo.git
```
🔗 See → [`git clone`](./git/01-setup/clone.md)

---

### 📸 Commit
> A **permanent snapshot** of staged changes saved to the repository.

Each commit stores:
- 📝 Message
- 👤 Author + email
- 🕐 Timestamp
- 🔗 Parent commit reference

```bash
git commit -m "feat: add login page"
```
🔗 See → [`git commit`](./git/02-staging-and-committing/commit.md)

---

### 🔑 Commit Hash
> A **unique 40-character SHA-1 string** identifying every commit.

```
Full:    abc1234def567890abc1234def567890abc12345
Short:   abc1234    ← first 7 characters (usually enough)
```

---

### ⚠️ Conflict
> When two branches modify the **same part of a file** differently and Git can't auto-merge.

```
<<<<<<< HEAD
your version
=======
incoming version
>>>>>>> feature-branch
```

Git stops and asks you to manually choose which version to keep.
🔗 See → [`git merge`](./git/03-branching-and-merging/merge.md)

---

## 🅓 — D

---

### 🕸️ DAG (Directed Acyclic Graph)
> The data structure Git uses to store **commit history**.

Each commit points to its parent(s). Branches are just named pointers into this graph.

```
A ── B ── C ── D  (main)
          └── E ── F  (feature)
```

---

### 🌟 Default Branch
> The **primary branch** of a repository.

Historically named `master`, now commonly `main`. This is what GitHub shows by default.

```bash
git config --global init.defaultBranch main
```

---

### 🔓 Detached HEAD
> State where HEAD points to a **specific commit** instead of a branch.

Any commits made in this state are not on any branch and may be lost.

```bash
git checkout abc123   # ⚠️ enters detached HEAD

# Fix — create a branch to save your work:
git switch -c my-new-branch
```
🔗 See → [`git reflog`](./git/07-advanced/reflog.md)

---

### ↔️ Diff
> The **line-by-line differences** between two file versions, commits, or branches.

```diff
- old line (removed)
+ new line (added)
  unchanged line
```
🔗 See → [`git diff`](./git/02-staging-and-committing/diff.md)

---

## 🅕 — F

---

### ⏩ Fast-Forward Merge
> A merge where Git simply **moves the pointer forward** — no merge commit created.

Only possible when the target branch has no new commits since branching.

```
Before:  main: A ── B
                      \
         feature:      C ── D

After:   main: A ── B ── C ── D  ✅ clean!
```

---

### 📥 Fetch
> **Downloading** changes from a remote without merging them.

Safe to run anytime — it never modifies your working files.

```bash
git fetch origin        # download
git diff main origin/main  # review
git merge origin/main   # merge when ready
```
🔗 See → [`git fetch`](./git/04-remote-workflow/fetch.md)

---

### 🍴 Fork
> A **personal copy** of someone else's GitHub repo in your own account.

```
Original Repo  →  Fork (your copy)  →  Clone locally  →  PR back
```
🔗 See → [Fork](./github/01-github-basics/fork.md)

---

## 🅖 — G

---

### 🐙 Git
> A **distributed version control system** that tracks changes in files over time.

Created by Linus Torvalds in 2005 for Linux kernel development. Now the industry standard.

---

### 🌐 GitHub
> A **cloud platform built on Git** that adds collaboration features.

| Git | GitHub |
|---|---|
| Version control software | Hosting + collaboration platform |
| Runs locally | Runs on the web |
| Free, open source | Freemium |

---

### ⚡ GitHub Actions
> GitHub's built-in **CI/CD platform** for automating workflows.

Triggers: push, pull_request, schedule, manual, and more.

```yaml
on: push
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - run: npm test
```
🔗 See → [GitHub Actions Overview](./github/03-github-actions/overview.md)

---

### 🚫 .gitignore
> A file listing **patterns of files Git should not track**.

```
node_modules/
.env
*.log
.DS_Store
```

---

### 📄 Gist
> A **lightweight way to share** code snippets or small files on GitHub.

🔗 See → [`gh gist`](./github/02-github-cli/gh-gist.md)

---

## 🅗 — H

---

### 👉 HEAD
> A **special pointer** showing your current position in the repo.

```
HEAD → main → abc123 (latest commit)
```

Usually points to the tip of the current branch. Moves forward with each new commit.

---

### 🪝 Hook
> A **script Git runs automatically** before or after events like commit, push, or merge.

```
.git/hooks/
├── pre-commit     ← run tests before every commit
├── commit-msg     ← validate commit message format
└── pre-push       ← run linter before pushing
```
🔗 See → [`git hooks`](./git/07-advanced/hooks.md)

---

## 🅘 — I

---

### 📋 Index
> Another name for the **staging area**.

The intermediate layer between your working directory and the repository. Changes go here before being committed.

```
Working Directory  →  Index (Staging)  →  Repository
    edit files          git add             git commit
```

---

## 🅛 — L

---

### 💻 Local Repository
> The **copy of the repo on your own machine**, stored inside the `.git/` folder.

Contains all commits, branches, tags, and history — a complete copy.

---

## 🅜 — M

---

### 🔀 Merge
> **Combining changes** from one branch into another, preserving full history.

```bash
git switch main
git merge feature/login
```
🔗 See → [`git merge`](./git/03-branching-and-merging/merge.md)

---

### 🔗 Merge Commit
> A **special commit with two parents**, created when diverged branches are merged.

```
A ── B ── C ────── M   ← merge commit (2 parents: C and F)
          └── E ── F ──┘
```

---

### 💥 Merge Conflict
> When Git **cannot automatically merge** because both branches changed the same lines.

Must be resolved manually — Git marks the conflict in the file and waits.
🔗 See → [`git merge`](./git/03-branching-and-merging/merge.md)

---

## 🅞 — O

---

### 🌍 Origin
> The **default name** for the remote repository when you clone.

Just a naming convention — you can rename it or have multiple remotes.

```bash
git remote -v
# origin  https://github.com/you/repo.git (fetch)
# origin  https://github.com/you/repo.git (push)
```

---

## 🅟 — P

---

### 📦 Pack File
> A **compressed file** Git creates during `git gc` that bundles many loose objects.

Keeps the `.git/` folder small and operations fast.
🔗 See → [`git gc`](./git/07-advanced/gc.md)

---

### 🩹 Patch
> A **file containing a diff** that can be applied to a repository.

```bash
git format-patch -1        # create patch
git apply fix.patch        # apply patch
```
🔗 See → [08-patching](./git/08-patching/)

---

### ⬇️ Pull
> **Fetching remote changes AND merging** them into the current branch.

```
git pull  =  git fetch  +  git merge
```
🔗 See → [`git pull`](./git/04-remote-workflow/pull.md)

---

### 🔃 Pull Request (PR)
> A **GitHub feature** for proposing code changes from one branch to another.

Enables code review, discussion, and CI checks before merging.
🔗 See → [Pull Request](./github/01-github-basics/pull-request.md)

---

### ⬆️ Push
> **Uploading** local commits to a remote repository.

```bash
git push origin main
```
🔗 See → [`git push`](./git/04-remote-workflow/push.md)

---

## 🅡 — R

---

### 🔁 Rebase
> **Rewriting commit history** by replaying commits from one branch onto another.

Creates a clean, linear history — but rewrites commit hashes.

```
Before:  A ── B ── C ── D  (main)
                    └── E ── F  (feature)

After:   A ── B ── C ── D ── E' ── F'  (linear!)
```
🔗 See → [`git rebase`](./git/03-branching-and-merging/rebase.md)

---

### 🔦 Reflog
> A **local log of every HEAD movement** — your safety net for recovering lost work.

```bash
git reflog
# HEAD@{0}: commit: Add login
# HEAD@{1}: reset: moving to HEAD~1   ← before the accident
# HEAD@{2}: commit: Important work    ← recover from here!
```
🔗 See → [`git reflog`](./git/07-advanced/reflog.md)

---

### 🌐 Remote
> A **version of your repo** hosted on a server like GitHub.

```bash
git remote add origin https://github.com/user/repo.git
```
🔗 See → [`git remote`](./git/04-remote-workflow/remote.md)

---

### 📡 Remote Tracking Branch
> A **local reference** to the state of a branch on the remote (e.g. `origin/main`).

Updated automatically when you run `git fetch`.

---

### 📁 Repository (Repo)
> A **directory tracked by Git**, containing all project files and complete history in `.git/`.

---

### ↩️ Revert
> **Creating a new undo commit** — safe for shared branches because history is preserved.

```bash
git revert abc123    # creates new commit that undoes abc123
```
🔗 See → [`git revert`](./git/05-undoing-changes/revert.md)

---

## 🅢 — S

---

### 🔐 SHA-1
> The **hashing algorithm** Git uses to generate unique 40-character commit hashes.

Same file content always produces the same hash — this is how Git detects changes.

---

### 🗜️ Squash
> **Combining multiple commits into one** — done during interactive rebase or PR merge.

```bash
git rebase -i HEAD~5   # squash last 5 commits into 1
```

---

### 🎭 Staging Area
> The **intermediate zone** where changes are prepared before being committed.

Also called the **Index**. Lets you choose exactly which changes to include in a commit.

```
Edit files  →  git add  →  Staging Area  →  git commit  →  History
```
🔗 See → [`git add`](./git/02-staging-and-committing/add.md)

---

### 🗄️ Stash
> **Temporarily saving** uncommitted changes so you can switch tasks cleanly.

```bash
git stash           # save work
git switch hotfix   # go fix something else
git stash pop       # restore work
```
🔗 See → [`git stash`](./git/05-undoing-changes/stash.md)

---

### 📦 Submodule
> A **Git repository nested inside** another repository.

```bash
git submodule add https://github.com/user/lib.git libs/lib
```
🔗 See → [`git submodule`](./git/04-remote-workflow/submodule.md)

---

## 🅣 — T

---

### 🏷️ Tag
> A **named reference** to a specific commit — typically used to mark releases.

```bash
git tag -a v1.0.0 -m "First release"   # annotated (recommended)
git tag v1.0.0                          # lightweight
```
🔗 See → [`git tag`](./git/03-branching-and-merging/tag.md)

---

### 🔺 Three-Way Merge
> A merge that uses the **common ancestor** of two branches to combine changes.

Always creates a merge commit. Used when both branches have diverged.

---

### 🌲 Tree
> Git's internal object type **representing a directory** and its contents.

```
Tree (root/)
 ├── Blob (index.html)
 ├── Blob (style.css)
 └── Tree (src/)
      └── Blob (app.py)
```

---

## 🅤 — U

---

### ⬆️ Upstream
> The **original repository** a fork was created from. Also the remote branch a local branch tracks.

```bash
git remote add upstream https://github.com/original/repo.git
git fetch upstream          # get latest from original
git merge upstream/main     # sync your fork
```

---

## 🅦 — W

---

### 📂 Working Directory
> The **local folder where you actively edit files** — before staging or committing.

```
Working Directory  →  Staging Area  →  Local Repo  →  Remote Repo
```

---

### 🌳 Worktree
> A **linked working directory** that lets you check out multiple branches simultaneously.

```bash
git worktree add ../hotfix hotfix/bug    # work on bug in separate folder
cd ../hotfix                              # fix it here
cd ../main-repo                           # feature branch still intact!
```
🔗 See → [`git worktree`](./git/07-advanced/worktree.md)

---

<div align="center">

📚 **Browse commands** → [`git/`](./git/) | [`github/`](./github/)

🗒️ **Quick reference** → [CHEATSHEET.md](./CHEATSHEET.md)

⚖️ **Comparisons** → [COMPARISONS.md](./COMPARISONS.md)

</div>