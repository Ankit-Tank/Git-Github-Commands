# git tag

## 📌 What it does
Creates a named reference (tag) pointing to a specific commit — typically used to mark release versions like `v1.0.0`.

## 🔧 Syntax
```bash
git tag <tagname>
git tag -a <tagname> -m "message"
```

## ✅ Examples

### Create a lightweight tag (just a pointer)
```bash
git tag v1.0.0
```

### Create an annotated tag (recommended — includes message, author, date)
```bash
git tag -a v1.0.0 -m "First stable release"
```

### Tag a specific past commit
```bash
git tag -a v0.9.0 abc123 -m "Beta release"
```

### List all tags
```bash
git tag
git tag -l "v1.*"    # filter by pattern
```

### View tag details
```bash
git show v1.0.0
```

### Push a tag to remote
```bash
git push origin v1.0.0
```

### Push all tags at once
```bash
git push origin --tags
```

### Delete a local tag
```bash
git tag -d v1.0.0
```

### Delete a remote tag
```bash
git push origin --delete v1.0.0
```

## 🔄 Lightweight vs Annotated Tags

| | Lightweight | Annotated |
|---|---|---|
| Command | `git tag v1.0` | `git tag -a v1.0 -m "msg"` |
| Stores | Commit pointer only | Author, date, message, checksum |
| Best for | Temporary / private marks | Official releases |

> ✅ Always use **annotated tags** for releases.

## 📋 Semantic Versioning with Tags

```
v1.0.0
  │ │ └── Patch (bug fixes)
  │ └──── Minor (new features, backward compatible)
  └────── Major (breaking changes)
```

## ⚠️ Common Mistakes
- Forgetting to push tags — `git push` doesn't push tags automatically
- Using lightweight tags for releases — annotated tags carry more useful metadata

## 🔗 Related Commands
- [`git log`](../06-inspection-and-history/log.md)
- [`git push`](../04-remote-workflows/push.md)
- [`git show`](../06-inspection-and-history/show.md)
