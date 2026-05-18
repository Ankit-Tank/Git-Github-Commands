# git bisect

## 📌 What it does
Uses binary search to find the exact commit that introduced a bug. Instead of manually checking every commit, Git narrows it down efficiently by halving the search range each step.

## 🔧 Syntax
```bash
git bisect start
git bisect bad
git bisect good <commit>
```

## ✅ Step-by-Step Workflow

### Step 1 — Start bisect
```bash
git bisect start
```

### Step 2 — Mark current state as bad (has the bug)
```bash
git bisect bad
```

### Step 3 — Mark a known good commit (no bug)
```bash
git bisect good v1.0.0       # a tag
git bisect good abc123        # a specific commit
```

Git will now checkout the middle commit between good and bad.

### Step 4 — Test and mark each commit Git checks out
```bash
# Test your app manually or run tests
git bisect good    # if this commit is fine
git bisect bad     # if this commit has the bug
```

Repeat until Git identifies the exact bad commit:

```
abc123 is the first bad commit
```

### Step 5 — End bisect and return to original branch
```bash
git bisect reset
```

## 🔄 How Binary Search Works

```
Commits: A - B - C - D - E - F - G (bug here)
                         ↑
               Git checks middle (D)
               You say: good
                                 ↑
                       Git checks F
                       You say: bad
                             ↑
                   Git checks E → first bad commit found!
```

Without bisect: check 7 commits  
With bisect: check only 3 commits ✅

## 🤖 Automated Bisect

If you have a test script that returns 0 (pass) or 1 (fail):

```bash
git bisect start
git bisect bad HEAD
git bisect good v1.0.0
git bisect run python test.py    # auto-runs on each commit
```

Git finds the bad commit automatically with zero manual steps.

## ⚠️ Common Mistakes
- Forgetting `git bisect reset` at the end — leaves you on a detached HEAD
- Not having a reliable way to test each commit — bisect only works if you can clearly identify good vs bad

## 🔗 Related Commands
- [`git log`](./log.md)
- [`git blame`](./blame.md)
- [`git show`](./show.md)
