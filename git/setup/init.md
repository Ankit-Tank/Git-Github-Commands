# git init

## 📌 What it does
Initializes a brand new Git repository in the current directory. Creates a hidden `.git/` folder that stores all version control data.

## 🔧 Syntax
```bash
git init [directory]
```

## ✅ Examples

### Initialize repo in current folder
```bash
git init
```

### Initialize repo in a new folder
```bash
git init my-project
```

### Initialize a bare repo (for servers/remotes)
```bash
git init --bare my-repo.git
```

## 📂 What Gets Created

```
.git/
├── HEAD        ← points to current branch
├── config      ← repo-level configuration
├── objects/    ← all commits, trees, blobs
├── refs/       ← branch and tag pointers
└── hooks/      ← automation scripts
```

## 🔄 Typical Workflow After Init

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <url>
git push -u origin main
```

## ⚠️ Common Mistakes
- Running `git init` inside an existing Git repo (creates nested repo)
- Deleting the `.git/` folder accidentally — this erases all history

## 🔗 Related Commands
- [`git config`](./config.md)
- [`git clone`](./clone.md)
