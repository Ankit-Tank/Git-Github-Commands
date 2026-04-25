# git gc

## 📌 What it does
Runs garbage collection on your repository — cleans up unnecessary files, compresses object storage, and optimizes performance. Git runs this automatically, but you can trigger it manually.

## 🔧 Syntax
```bash
git gc
```

## ✅ Examples

### Run standard garbage collection
```bash
git gc
```

### Aggressive optimization (deeper, slower — use occasionally)
```bash
git gc --aggressive
```

### Quiet mode (no output)
```bash
git gc --quiet
```

### Prune all unreachable objects immediately
```bash
git gc --prune=now
```

### Check what would be pruned (dry run)
```bash
git gc --prune=now --dry-run
```

## 🔄 What git gc Does Internally

| Task | Description |
|---|---|
| **Pack loose objects** | Combines thousands of small object files into efficient pack files |
| **Prune unreachable objects** | Removes commits/blobs no longer reachable from any branch/tag |
| **Compress pack files** | Further compresses existing pack files |
| **Expire old reflog entries** | Removes reflog entries older than 90 days |

## 📋 Before and After gc

```
Before gc:
.git/objects/
├── ab/
│   └── cdef1234...    ← loose object
├── cd/
│   └── ef5678...      ← loose object
└── (thousands more)

After gc:
.git/objects/
└── pack/
    ├── pack-abc123.idx    ← index
    └── pack-abc123.pack   ← all objects compressed here
```

## ⏰ When to Run Manually

- After a large rebase or history rewrite
- After using `git filter-branch`
- When `.git/` folder has grown unusually large
- Before pushing a repo to a server

## ⚠️ Common Mistakes
- Running `git gc --aggressive` too frequently — it's slow and rarely needed
- Running gc right after stashing — it won't prune stash entries

## 🔗 Related Commands
- [`git reflog`](./reflog.md)
- [`git prune`](./reflog.md)
- [`git stash`](../05-undoing-changes/stash.md)
