# git blame

## 📌 What it does
Shows who last modified each line of a file, when they did it, and in which commit. Used to track down when and why a specific line of code was changed.

## 🔧 Syntax
```bash
git blame <file>
```

## ✅ Examples

### Blame a file
```bash
git blame index.html
```

### Blame with shorter commit hashes
```bash
git blame --abbrev=7 index.html
```

### Blame specific line range (lines 10 to 25)
```bash
git blame -L 10,25 index.html
```

### Blame ignoring whitespace changes
```bash
git blame -w index.html
```

### Blame a file at a specific commit
```bash
git blame abc123 -- index.html
```

### Show email instead of name
```bash
git blame -e index.html
```

## 📋 Reading the Output

```
abc1234f (Ankit Tank  2024-01-15 10:30:00 +0530 1) <html>
def5678a (Rahul Shah  2024-02-01 09:00:00 +0530 2)   <head>
abc1234f (Ankit Tank  2024-01-15 10:30:00 +0530 3)   </head>
```

| Column | Meaning |
|---|---|
| `abc1234f` | Short commit hash |
| `Ankit Tank` | Author who last changed this line |
| `2024-01-15` | Date of change |
| `1` | Line number |
| `<html>` | Actual line content |

## 🔄 Common Use Case

Found a bug on line 42 of `app.py`?

```bash
git blame app.py -L 42,42
# abc123 (Ankit 2024-03-10) some_buggy_code()

git show abc123    # see the full commit that introduced it
```

## ⚠️ Common Mistakes
- Using blame to assign fault — it's a **debugging tool**, not a blame tool 😄
- Blaming without checking context — a line might look suspicious but the commit message explains why

## 🔗 Related Commands
- [`git log`](./log.md)
- [`git show`](./show.md)
- [`git bisect`](./bisect.md)
