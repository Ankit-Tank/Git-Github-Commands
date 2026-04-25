# git clean

## 📌 What it does
Removes untracked files and directories from your working directory — files that Git doesn't know about and aren't in `.gitignore`.

## 🔧 Syntax
```bash
git clean [options]
```

## ✅ Examples

### Preview what would be deleted (dry run — always do this first!)
```bash
git clean -n
git clean --dry-run
```

### Delete untracked files
```bash
git clean -f
```

### Delete untracked files AND directories
```bash
git clean -fd
```

### Delete ignored files too (build artifacts, etc.)
```bash
git clean -fX
```

### Delete untracked + ignored files + directories
```bash
git clean -fdx
```

### Interactive mode (choose what to delete)
```bash
git clean -i
```

## 📋 Flags Reference

| Flag | Meaning |
|---|---|
| `-n` | Dry run — preview only, don't delete |
| `-f` | Force — required to actually delete |
| `-d` | Include untracked directories |
| `-x` | Include ignored files |
| `-X` | Only ignored files |
| `-i` | Interactive mode |

## 🔄 Common Use Cases

### Clean up after a build
```bash
git clean -fd    # remove build output folders
```

### Full reset to clean state
```bash
git reset --hard HEAD    # undo tracked file changes
git clean -fd            # remove untracked files/folders
```

## ⚠️ Common Mistakes
- Running `git clean -f` without `-n` first — deletes files permanently with no undo
- Forgetting `-d` when you need to remove folders
- Using `-x` when you only want to remove non-ignored files

> ⚠️ **There is no undo.** Cleaned files are gone permanently. Always run `git clean -n` first.

## 🔗 Related Commands
- [`git restore`](./restore.md)
- [`git reset`](./reset.md)
- [`git status`](../02-staging-and-committing/status.md)
