# git archive

## 📌 What it does
Exports a snapshot of your repository (or a specific branch/commit) as a `.zip` or `.tar` file — without including the `.git/` folder. Clean distribution of source code.

## 🔧 Syntax
```bash
git archive --format=<format> <tree-ish> > output.zip
```

## ✅ Examples

### Export current branch as a zip
```bash
git archive --format=zip HEAD > project.zip
```

### Export as tar.gz
```bash
git archive --format=tar.gz HEAD > project.tar.gz
```

### Export with a named prefix folder inside the archive
```bash
git archive --format=zip --prefix=my-project/ HEAD > project.zip
```

### Export a specific branch
```bash
git archive --format=zip main > main.zip
```

### Export a specific tag (e.g. a release)
```bash
git archive --format=zip v1.0.0 > release-v1.0.0.zip
```

### Export only a specific subdirectory
```bash
git archive --format=zip HEAD src/ > src-only.zip
```

### Write directly to a file (alternative syntax)
```bash
git archive -o project.zip HEAD
```

## 🔄 git archive vs manual zip

| | Manual zip | git archive |
|---|---|---|
| Includes `.git/` folder | ✅ Yes (large!) | ❌ No (clean) |
| Respects `.gitattributes` | ❌ No | ✅ Yes |
| Can export any commit/tag | ❌ No | ✅ Yes |
| Best for distribution | ❌ | ✅ |

## 📋 Common Use Case — Release Distribution

```bash
# Tag a release
git tag -a v2.0.0 -m "Version 2.0.0"

# Export clean zip for distribution
git archive --format=zip --prefix=app-v2.0.0/ v2.0.0 > app-v2.0.0.zip
```

## ⚠️ Common Mistakes
- Forgetting `>` to redirect output — without it, binary data prints to terminal
- Not using `--prefix` — archive contents land directly without a folder wrapper

## 🔗 Related Commands
- [`git tag`](../03-branching-and-merging/tag.md)
- [`git log`](../06-inspection-and-history/log.md)
