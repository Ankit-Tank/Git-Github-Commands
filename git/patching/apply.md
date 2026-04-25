# git apply

## 📌 What it does
Applies a patch file (a `.patch` file containing diffs) to your working directory. Used to apply changes shared as files rather than through normal Git workflows.

## 🔧 Syntax
```bash
git apply <patch-file>
```

## ✅ Examples

### Apply a patch file
```bash
git apply fix.patch
```

### Preview what the patch would do (dry run)
```bash
git apply --check fix.patch
```

### Apply and stage changes at the same time
```bash
git apply --index fix.patch
```

### Apply even with minor whitespace differences
```bash
git apply --whitespace=fix fix.patch
```

### Apply patch in reverse (undo a patch)
```bash
git apply --reverse fix.patch
git apply -R fix.patch
```

### Apply a patch from a URL or stdin
```bash
curl https://example.com/fix.patch | git apply
```

## 🔄 How to Create + Apply a Patch

### Creating the patch (on sender's machine):
```bash
git diff > fix.patch              # unstaged changes
git diff --staged > fix.patch     # staged changes
```

### Applying the patch (on receiver's machine):
```bash
git apply fix.patch
git add .
git commit -m "Apply fix patch"
```

## 🆚 git apply vs git am

| | `git apply` | `git am` |
|---|---|---|
| Input | Plain diff patch | Formatted email patch |
| Preserves author/date | ❌ No | ✅ Yes |
| Auto-commits | ❌ No | ✅ Yes |
| Created by | `git diff` | `git format-patch` |

## ⚠️ Common Mistakes
- Applying a patch to the wrong branch — always check `git status` and branch first
- Not running `--check` before applying — avoids surprises from conflicts

## 🔗 Related Commands
- [`git diff`](../02-staging-and-committing/diff.md)
- [`git format-patch`](./format-patch.md)
- [`git am`](./am.md)
