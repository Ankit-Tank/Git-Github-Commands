# 🩹 08 — Patching

Commands for sharing commits as files and applying them across repositories.

---

## 📄 Commands in This Folder

| Command | File | Description |
|---|---|---|
| `git apply` | [apply.md](./apply.md) | Apply a plain diff patch file |
| `git format-patch` | [format-patch.md](./format-patch.md) | Export commits as email-ready patch files |
| `git am` | [am.md](./am.md) | Apply format-patch files preserving author info |

---

## 🔄 Patch Workflow

```bash
# Sender — export commits as patch files
git format-patch -3 -o patches/
# Creates: 0001-feat.patch, 0002-fix.patch, 0003-docs.patch

# Receiver — apply patches with full commit info
git am patches/*.patch
# Commits appear with original author + dates preserved ✅
```

## 🆚 apply vs am

| | `git apply` | `git am` |
|---|---|---|
| Input | Plain `git diff` output | `git format-patch` output |
| Preserves author | ❌ | ✅ |
| Auto-commits | ❌ | ✅ |

---

> ⬅️ [07 — Advanced](../07-advanced/) | ⬆️ [Back to git/](../README.md)
