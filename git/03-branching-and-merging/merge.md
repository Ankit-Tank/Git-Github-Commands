# git merge

## 📌 What it does
Combines changes from one branch into another. Preserves full branch history and creates a merge commit.

## 🔧 Syntax
```bash
git merge <branch>
```

## ✅ Examples

### Merge a feature branch into main
```bash
git switch main
git merge feature-login
```

### Merge with a descriptive merge commit message
```bash
git merge feature-login -m "Merge feature-login into main"
```

### Merge but don't auto-commit (review first)
```bash
git merge --no-commit feature-login
```

### Fast-forward merge only (fail if not possible)
```bash
git merge --ff-only feature-login
```

### Always create a merge commit (no fast-forward)
```bash
git merge --no-ff feature-login
```

### Abort a merge in progress
```bash
git merge --abort
```

## 🔄 Types of Merges

### Fast-Forward Merge
When the target branch has no new commits since branching:
```
Before:  main: A - B
                     \
         feature:     C - D

After:   main: A - B - C - D
```

### Three-Way Merge (creates merge commit M)
When both branches have diverged:
```
Before:  main:    A - B - C
                       \
         feature:       D - E

After:   main:    A - B - C --- M
                       \       /
         feature:       D - E
```

## 🛠️ Resolving Merge Conflicts

When Git can't auto-merge:

```bash
git merge feature-login
# CONFLICT (content): Merge conflict in index.html
```

Open the file — Git marks conflicts like this:

```
<<<<<<< HEAD
<h1>Welcome</h1>      ← your version
=======
<h1>Hello World</h1>  ← incoming version
>>>>>>> feature-login
```

Fix the file, then:

```bash
git add index.html
git commit
```

## ⚠️ Common Mistakes
- Merging without pulling latest changes first
- Not resolving all conflict markers before committing
- Forgetting to switch to target branch before merging

## 🔗 Related Commands
- [`git branch`](./branch.md)
- [`git rebase`](./rebase.md)
- [`git switch`](./switch.md)
- [`git stash`](../05-undoing-changes/stash.md)
