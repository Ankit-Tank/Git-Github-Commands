# git format-patch

## 📌 What it does
Creates patch files from commits — formatted as email-ready `.patch` files that include the commit message, author, and date alongside the diff. The proper way to share commits as files.

## 🔧 Syntax
```bash
git format-patch <since>
git format-patch -<n>
```

## ✅ Examples

### Create a patch for the last commit
```bash
git format-patch -1
```

### Create patches for the last 3 commits (one file per commit)
```bash
git format-patch -3
```

### Create a patch for all commits since a tag
```bash
git format-patch v1.0.0
```

### Create a patch for commits between two branches
```bash
git format-patch main..feature-login
```

### Save all patches to a specific folder
```bash
git format-patch -3 -o patches/
```

### Create a single combined patch file
```bash
git format-patch -3 --stdout > all-changes.patch
```

## 📋 Output Files

Running `git format-patch -3` creates:

```
0001-Add-login-page.patch
0002-Fix-navbar-bug.patch
0003-Update-README.patch
```

Each file looks like:

```
From abc1234 Mon Sep 17 00:00:00 2001
From: Ankit Tank <ankit@example.com>
Date: Mon, 15 Jan 2024 10:30:00 +0530
Subject: [PATCH 1/3] Add login page

---
 index.html | 10 ++++++++++
 1 file changed, 10 insertions(+)

diff --git a/index.html b/index.html
...
```

## 🔄 Typical Patch Sharing Workflow

```bash
# Sender
git format-patch -2 -o patches/
# Share patches/ folder via email, Slack, USB, etc.

# Receiver
git am patches/*.patch
# Commits are applied with original author + message preserved
```

## 🆚 format-patch vs diff

| | `git diff` | `git format-patch` |
|---|---|---|
| Output | Raw diff | Email-formatted patch |
| Includes commit message | ❌ | ✅ |
| Includes author/date | ❌ | ✅ |
| Applied with | `git apply` | `git am` |
| Best for | Quick sharing | Formal patch contribution |

## ⚠️ Common Mistakes
- Forgetting `-o patches/` — patches scatter into current directory
- Using `git diff` instead of `format-patch` when author metadata matters

## 🔗 Related Commands
- [`git am`](./am.md)
- [`git apply`](./apply.md)
- [`git log`](../06-inspection-and-history/log.md)
