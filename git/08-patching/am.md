# git am

## 📌 What it does
Applies patches created by `git format-patch` as full commits — preserving the original author name, email, date, and commit message. "am" stands for "apply mailbox".

## 🔧 Syntax
```bash
git am <patch-file>
```

## ✅ Examples

### Apply a single patch file
```bash
git am 0001-Add-login-page.patch
```

### Apply all patches in a folder (in order)
```bash
git am patches/*.patch
```

### Apply from stdin
```bash
cat fix.patch | git am
```

### Apply with whitespace error tolerance
```bash
git am --whitespace=fix 0001-fix.patch
```

### Skip a conflicting patch and continue
```bash
git am --skip
```

### Abort and restore original state
```bash
git am --abort
```

### Resolve conflict then continue
```bash
# fix the conflict manually
git add resolved-file.py
git am --continue
```

## 🔄 Full Patch Workflow

### On the sender's machine:
```bash
git format-patch -2 -o patches/
# Creates:
# patches/0001-Add-login-page.patch
# patches/0002-Fix-bug.patch
```

### On the receiver's machine:
```bash
git am patches/*.patch

# Result in git log:
# abc123 Add login page     ← Ankit Tank, Jan 15 2024
# def456 Fix bug            ← Ankit Tank, Jan 16 2024
```

Original author and dates are fully preserved. ✅

## 🆚 git am vs git apply

| | `git apply` | `git am` |
|---|---|---|
| Input format | Plain diff | format-patch output |
| Preserves author | ❌ No | ✅ Yes |
| Auto-commits | ❌ No | ✅ Yes |
| Best for | Simple diffs | Full commit sharing |

## ⚠️ Common Mistakes
- Applying patches out of order — always use `patches/*.patch` not random order
- Forgetting `--abort` when conflicts arise and you want to start over — leaves repo in mid-apply state
- Using `git am` with plain `git diff` output — it won't work, use `git format-patch` output only

## 🔗 Related Commands
- [`git format-patch`](./format-patch.md)
- [`git apply`](./apply.md)
- [`git cherry-pick`](../03-branching-and-merging/cherry-pick.md)
