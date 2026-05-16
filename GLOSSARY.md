# 📖 Git & GitHub Glossary

> Definitions for terms you'll encounter while using Git and GitHub.

---

## A

**Annotated Tag**
A tag that stores extra metadata — author, date, and message. Recommended for releases.
```bash
git tag -a v1.0.0 -m "First release"
```

---

## B

**Bare Repository**
A repo with no working directory — only the `.git/` contents. Used on servers/remotes.
```bash
git init --bare my-repo.git
```

**Blob**
Git's internal object type for storing raw file contents. Every version of every file is a blob.

**Branch**
A lightweight movable pointer to a commit. Lets you work independently from the main codebase.

---

## C

**Checkout**
Switching to a different branch or restoring files from a commit. Modern equivalent: `git switch` and `git restore`.

**Cherry-pick**
Applying a specific commit from one branch onto another without merging the full branch.

**CI/CD**
Continuous Integration / Continuous Deployment. Automated pipelines that test and deploy code — GitHub Actions is a CI/CD tool.

**Clone**
Creating a local copy of a remote repository including all history.

**Commit**
A snapshot of staged changes saved permanently to the repository with a message, author, and timestamp.

**Commit Hash**
A unique 40-character SHA-1 string identifying every commit (e.g. `abc1234def...`). Can be shortened to first 7 characters.

**Conflict**
When two branches modify the same part of a file differently and Git can't auto-merge them.

---

## D

**DAG (Directed Acyclic Graph)**
The data structure Git uses to store commit history. Each commit points to its parent(s).

**Default Branch**
The primary branch of a repo. Historically `master`, now commonly `main`.

**Detached HEAD**
State where HEAD points to a specific commit instead of a branch. Commits made here are not on any branch.
```bash
git checkout abc123   # causes detached HEAD
```

**Diff**
The line-by-line differences between two file versions or commits.

---

## F

**Fast-Forward Merge**
A merge where the target branch has no new commits since branching, so Git simply moves the pointer forward — no merge commit created.

**Fetch**
Downloading changes from a remote without merging them into your local branch.

**Fork**
A personal copy of someone else's GitHub repo in your own account. Used for contributing to open source.

---

## G

**Git**
A distributed version control system that tracks changes in files over time.

**GitHub**
A cloud platform built on top of Git that adds collaboration features — pull requests, issues, Actions, etc.

**GitHub Actions**
GitHub's built-in CI/CD platform for automating workflows triggered by repo events.

**.gitignore**
A file listing patterns of files/folders Git should not track.

**Gist**
A lightweight way to share code snippets or small files on GitHub.

---

## H

**HEAD**
A special pointer that indicates the current position in the repo — usually points to the latest commit on the current branch.

**Hook**
A script in `.git/hooks/` that Git runs automatically before or after events like commit, push, merge.

---

## I

**Index**
Another name for the staging area — the intermediate layer between your working directory and the repository.

---

## L

**Local Repository**
The copy of the repo on your own machine, stored in the `.git/` folder.

---

## M

**Merge**
Combining changes from one branch into another, preserving full history.

**Merge Commit**
A special commit with two parent commits, created when branches with diverged history are merged.

**Merge Conflict**
When Git cannot automatically merge changes because both branches modified the same lines.

---

## O

**Origin**
The default name for the remote repository when you clone. Just a convention — you can rename it.

---

## P

**Pack File**
A compressed file Git creates during `git gc` that bundles many loose objects together for efficiency.

**Patch**
A file containing a diff that can be applied to a repository using `git apply` or `git am`.

**Pull**
Fetching remote changes and merging them into the current branch (`git fetch` + `git merge`).

**Pull Request (PR)**
A GitHub feature for proposing code changes from one branch to another, enabling code review before merging.

**Push**
Uploading local commits to a remote repository.

---

## R

**Rebase**
Rewriting commit history by replaying commits from one branch onto another, creating a linear history.

**Reflog**
A local log of all HEAD movements — useful for recovering lost commits after resets or rebases.

**Remote**
A version of your repo hosted on a server (GitHub, GitLab, etc.). Referenced by name (e.g. `origin`).

**Remote Tracking Branch**
A local reference to the state of a branch on the remote (e.g. `origin/main`). Updated by `git fetch`.

**Repository (Repo)**
A directory tracked by Git, containing all project files and the full history in `.git/`.

**Revert**
Creating a new commit that undoes a previous commit — safe for shared branches because history is preserved.

---

## S

**SHA-1**
The hashing algorithm Git uses to generate unique commit hashes.

**Squash**
Combining multiple commits into one — commonly done during rebase or PR merge.

**Staging Area**
The intermediate zone where changes are prepared before being committed. Also called the Index.

**Stash**
Temporarily saving uncommitted changes so you can switch tasks with a clean working directory.

**Submodule**
A Git repository nested inside another repository.

---

## T

**Tag**
A named reference to a specific commit, typically used to mark release versions (e.g. `v1.0.0`).

**Three-Way Merge**
A merge that uses the common ancestor of two branches to combine changes — creates a merge commit.

**Tree**
Git's internal object type representing a directory and its contents (blobs and other trees).

---

## U

**Upstream**
The original repository that a fork was created from. Also refers to the remote branch a local branch tracks.
```bash
git remote add upstream https://github.com/original/repo.git
```

---

## W

**Working Directory**
The local folder where you actively edit files — before staging or committing.

**Worktree**
A linked working directory that lets you check out multiple branches simultaneously in separate folders.

---

> 📚 For command details → browse the [`git/`](./git/) and [`github/`](./github/) folders.
> 🗒️ For quick command reference → see [CHEATSHEET.md](./CHEATSHEET.md)
