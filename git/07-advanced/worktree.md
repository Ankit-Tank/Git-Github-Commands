# git worktree

## 📌 What it does
Allows you to check out multiple branches simultaneously in separate directories — all linked to the same repository. Work on two branches at the same time without stashing or switching.

## 🔧 Syntax
```bash
git worktree add <path> <branch>
```

## ✅ Examples

### Add a new worktree for a branch
```bash
git worktree add ../hotfix hotfix/payment-bug
```

### Add a worktree and create a new branch
```bash
git worktree add -b new-feature ../feature-work
```

### List all active worktrees
```bash
git worktree list
```

### Remove a worktree
```bash
git worktree remove ../hotfix
```

### Clean up worktree references (after manually deleting folder)
```bash
git worktree prune
```

## 🔄 Real World Use Case

You're deep in feature development and an urgent hotfix is needed:

```bash
# Without worktree — you must stash and switch
git stash
git switch hotfix/bug
# fix it...
git switch feature
git stash pop

# With worktree — work in parallel!
git worktree add ../hotfix hotfix/bug
cd ../hotfix
# fix it here, in a separate folder
cd ../main-repo
# continue feature work — nothing interrupted
```

## 📂 Folder Structure After Adding Worktree

```
projects/
├── my-repo/         ← main worktree (original)
│   └── .git/
└── hotfix/          ← linked worktree (separate folder)
    └── (no .git — uses main repo's .git)
```

## 📋 git worktree list Output

```
/home/user/my-repo    abc1234 [main]
/home/user/hotfix     def5678 [hotfix/payment-bug]
```

## ⚠️ Common Mistakes
- Checking out the same branch in two worktrees — Git doesn't allow this
- Forgetting to remove the worktree after finishing — use `git worktree prune`

## 🔗 Related Commands
- [`git stash`](../05-undoing-changes/stash.md)
- [`git switch`](../03-branching-and-merging/switch.md)
- [`git branch`](../03-branching-and-merging/branch.md)
