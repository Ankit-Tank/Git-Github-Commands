# 🗒️ Git Cheatsheet

> Quick reference for all Git commands. For detailed explanations, click any command link.

---

## ⚙️ Setup

```bash
git config --global user.name "Your Name"       # set username
git config --global user.email "you@email.com"  # set email
git config --global core.editor "code --wait"   # set editor
git config --list                                # view all settings
git config --global alias.st status             # create alias

git init                      # initialize new repo
git init my-project           # initialize in new folder
git clone <url>               # clone remote repo
git clone <url> my-folder     # clone into custom folder name
git clone -b develop <url>    # clone specific branch
```

---

## 📋 Staging & Committing

```bash
git status                    # check working tree state
git status -s                 # short status output

git add <file>                # stage specific file
git add .                     # stage all changes
git add -A                    # stage all including deletions
git add -p                    # stage interactively (chunk by chunk)

git commit -m "message"       # commit with message
git commit -am "message"      # stage tracked files + commit
git commit --amend -m "msg"   # edit last commit message

git diff                      # unstaged changes
git diff --staged             # staged changes (about to commit)
git diff main feature         # compare two branches

git mv old.py new.py          # rename/move a tracked file
git rm file.txt               # remove file from disk + tracking
git rm --cached file.txt      # stop tracking, keep on disk
```

---

## 🌿 Branching & Merging

```bash
git branch                    # list local branches
git branch -a                 # list all branches (inc. remote)
git branch feature-login      # create new branch
git branch -d feature-login   # delete merged branch
git branch -D feature-login   # force delete branch
git branch -m new-name        # rename current branch

git switch main               # switch to branch
git switch -c feature-login   # create + switch to new branch
git switch -                  # switch to previous branch

git checkout main             # switch branch (old way)
git checkout -b feature       # create + switch (old way)
git checkout -- file.html     # discard file changes (old way)

git merge feature-login       # merge branch into current
git merge --no-ff feature     # always create merge commit
git merge --abort             # abort merge in progress

git rebase main               # rebase current branch onto main
git rebase -i HEAD~3          # interactive rebase last 3 commits
git rebase --abort            # abort rebase
git rebase --continue         # continue after resolving conflict

git cherry-pick abc123        # apply specific commit
git cherry-pick abc123 def456 # apply multiple commits

git tag v1.0.0                # create lightweight tag
git tag -a v1.0.0 -m "msg"   # create annotated tag
git tag                       # list all tags
git push origin v1.0.0        # push tag to remote
git tag -d v1.0.0             # delete local tag
```

---

## ☁️ Remote Workflows

```bash
git remote -v                         # list remotes with URLs
git remote add origin <url>           # add remote
git remote remove origin              # remove remote
git remote rename origin upstream     # rename remote
git remote set-url origin <new-url>   # change remote URL

git push origin main                  # push to remote
git push -u origin main               # push + set upstream
git push --all origin                 # push all branches
git push --tags                       # push all tags
git push origin --delete branch-name  # delete remote branch
git push --force-with-lease           # safe force push

git pull                              # fetch + merge
git pull --rebase                     # fetch + rebase (cleaner)
git pull origin main                  # pull specific branch

git fetch origin                      # download, don't merge
git fetch --all                       # fetch all remotes
git fetch --prune                     # remove stale remote refs
```

---

## ↩️ Undoing Changes

```bash
git restore file.html             # discard working dir changes
git restore .                     # discard all working dir changes
git restore --staged file.html    # unstage a file

git reset HEAD~1                  # undo last commit, keep changes unstaged
git reset --soft HEAD~1           # undo last commit, keep changes staged
git reset --hard HEAD~1           # undo last commit, DELETE changes ⚠️
git reset --hard abc123           # reset to specific commit ⚠️

git revert HEAD                   # create new commit that undoes last
git revert abc123                 # create new commit that undoes specific commit
git revert HEAD --no-edit         # revert without opening editor

git stash                         # save uncommitted changes
git stash save "label"            # save with label
git stash list                    # list all stashes
git stash pop                     # apply + remove latest stash
git stash apply stash@{2}         # apply specific stash
git stash drop stash@{1}          # delete specific stash
git stash clear                   # delete all stashes

git clean -n                      # preview what will be deleted
git clean -fd                     # delete untracked files + folders ⚠️
```

---

## 🔍 Inspection & History

```bash
git log                           # full commit history
git log --oneline                 # one line per commit
git log --oneline --graph --all   # visual branch graph
git log -5                        # last 5 commits
git log --author="Ankit"          # filter by author
git log --after="2024-01-01"      # filter by date
git log --grep="login"            # filter by message keyword
git log -- index.html             # history of specific file
git log -p                        # log with full diffs

git show HEAD                     # show latest commit
git show abc123                   # show specific commit
git show abc123:file.html         # show file at specific commit

git blame file.html               # who changed each line
git blame -L 10,25 file.html      # blame specific line range

git bisect start                  # start binary search for bug
git bisect bad                    # mark current as bad
git bisect good v1.0.0            # mark known good commit
git bisect reset                  # end bisect session

git shortlog -sn                  # commit count per author
```

---

## 🔧 Advanced

```bash
git reflog                        # full history of HEAD movements
git reflog -10                    # last 10 HEAD movements

git worktree add ../hotfix branch # work on branch in separate folder
git worktree list                 # list all worktrees
git worktree remove ../hotfix     # remove worktree

git archive --format=zip HEAD > out.zip          # export as zip
git archive --format=tar.gz HEAD > out.tar.gz    # export as tar.gz

git gc                            # garbage collection + optimize
git gc --aggressive               # deeper optimization
```

---

## 🩹 Patching

```bash
git diff > fix.patch              # create patch from unstaged changes
git apply fix.patch               # apply patch file
git apply --check fix.patch       # preview patch (dry run)
git apply -R fix.patch            # reverse/undo a patch

git format-patch -1               # create patch from last commit
git format-patch -3               # create patches for last 3 commits
git format-patch v1.0.0           # patches since a tag

git am patch.patch                # apply format-patch file (with author)
git am patches/*.patch            # apply all patches in folder
git am --abort                    # abort am session
git am --continue                 # continue after conflict
```

---

## 🐙 GitHub CLI (`gh`)

```bash
gh auth login                     # authenticate with GitHub
gh auth status                    # check login status

gh repo create my-repo --public   # create new repo
gh repo clone user/repo           # clone a repo
gh repo fork user/repo --clone    # fork + clone
gh repo view --web                # open repo in browser
gh repo list                      # list your repos

gh pr create                      # create pull request
gh pr list                        # list open PRs
gh pr view 42                     # view PR details
gh pr checkout 42                 # checkout PR branch locally
gh pr review 42 --approve         # approve a PR
gh pr merge 42 --squash           # merge PR with squash
gh pr checks 42                   # view CI status

gh issue create                   # create new issue
gh issue list                     # list open issues
gh issue view 42                  # view issue details
gh issue close 42                 # close an issue

gh gist create file.py --public   # create public gist
gh gist list                      # list your gists
```

---

## 💡 Most Used Daily Commands

```bash
git status
git add .
git commit -m "message"
git push
git pull
git switch -c feature/name
git merge feature/name
git log --oneline --graph --all
git stash / git stash pop
git reset --soft HEAD~1
```

---

> 📚 For full explanations, examples, and common mistakes → browse the [`git/`](./git/) and [`github/`](./github/) folders.
