# gh repo

## 📌 What it does
Creates, clones, forks, and manages GitHub repositories directly from the terminal — no browser needed.

---

## 🔧 Syntax
```bash
gh repo <command>
```

## ✅ Examples

### Create a new repo
```bash
gh repo create my-project
gh repo create my-project --public
gh repo create my-project --private
gh repo create my-project --public --clone   # create + clone locally
```

### Clone a repo
```bash
gh repo clone Ankit-Tank/ML-Projects
gh repo clone Ankit-Tank/ML-Projects my-folder   # into custom folder
```

### Fork a repo
```bash
gh repo fork Ankit-Tank/ML-Projects
gh repo fork Ankit-Tank/ML-Projects --clone   # fork + clone locally
```

### View repo details
```bash
gh repo view
gh repo view Ankit-Tank/ML-Projects
gh repo view --web   # open in browser
```

### List your repos
```bash
gh repo list
gh repo list --limit 20
gh repo list --public
gh repo list --private
```

### Delete a repo
```bash
gh repo delete my-project
gh repo delete my-project --confirm   # skip confirmation prompt
```

### Rename a repo
```bash
gh repo rename new-name
```

### Archive a repo
```bash
gh repo archive my-old-project
```

### Sync a forked repo with upstream
```bash
gh repo sync
gh repo sync --branch main
```

---

## 📋 Create Repo Options

| Flag | Description |
|---|---|
| `--public` | Make repo public |
| `--private` | Make repo private |
| `--clone` | Clone after creating |
| `--description "text"` | Add description |
| `--gitignore Python` | Add .gitignore template |
| `--license mit` | Add LICENSE file |
| `--push` | Push local commits after creating |

### Full example — create with all options:
```bash
gh repo create ML-Projects \
  --public \
  --description "Machine Learning projects" \
  --gitignore Python \
  --license mit \
  --clone
```

---

## ⚠️ Common Mistakes
- Forgetting `--clone` when creating — creates on GitHub but doesn't download locally
- Running `gh repo delete` without `--confirm` on CI — it prompts interactively

## 🔗 Related Topics
- [gh auth](./gh-auth.md)
- [gh pr](./gh-pr.md)
- [Fork](../01-github-basics/fork.md)
