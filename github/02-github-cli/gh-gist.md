# gh gist

## 📌 What it is
A Gist is a simple way to share code snippets, notes, or small files on GitHub. Think of it as a lightweight single-file (or multi-file) repo. The `gh gist` command lets you create and manage them from the terminal.

---

## 🔧 Syntax
```bash
gh gist <command>
```

## ✅ Examples

### Create a gist from a file
```bash
gh gist create script.py
gh gist create script.py --public
gh gist create script.py --desc "Useful Python snippet"
```

### Create a gist from multiple files
```bash
gh gist create file1.py file2.md
```

### Create a gist from stdin (pipe input)
```bash
echo "print('Hello World')" | gh gist create --filename hello.py
cat notes.txt | gh gist create --filename notes.txt
```

### List your gists
```bash
gh gist list
gh gist list --limit 20
gh gist list --public
gh gist list --secret
```

### View a gist
```bash
gh gist view <gist-id>
gh gist view <gist-id> --web   # open in browser
gh gist view <gist-id> --raw   # show raw content
```

### Edit a gist
```bash
gh gist edit <gist-id>
gh gist edit <gist-id> --filename script.py
```

### Clone a gist locally
```bash
gh gist clone <gist-id>
```

### Delete a gist
```bash
gh gist delete <gist-id>
```

---

## 🔄 Public vs Secret Gists

| | Public | Secret |
|---|---|---|
| Searchable on GitHub | ✅ Yes | ❌ No |
| Accessible via link | ✅ Yes | ✅ Yes (with link) |
| Visible on your profile | ✅ Yes | ❌ No |
| Best for | Sharing openly | Private notes/snippets |

> ⚠️ Secret gists are NOT private — anyone with the link can view them.

---

## 📋 Common Use Cases

### Save a quick code snippet
```bash
gh gist create utils.py --public --desc "Reusable Python utilities"
```

### Share terminal output
```bash
some-command | gh gist create --filename output.txt
```

### Store a config template
```bash
gh gist create .bashrc --secret --desc "My bash config backup"
```

---

## ⚠️ Common Mistakes
- Confusing secret with private — secret gists are still publicly accessible via direct URL
- Forgetting `--filename` when creating from stdin — defaults to a generic name

## 🔗 Related Topics
- [gh repo](./gh-repo.md)
- [gh auth](./gh-auth.md)
