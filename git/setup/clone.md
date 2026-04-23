# git clone

## 📌 What it does
Creates a complete local copy of a remote repository — including all files, branches, commits, and history.

## 🔧 Syntax
```bash
git clone <url> [directory]
```

## ✅ Examples

### Clone via HTTPS
```bash
git clone https://github.com/user/repo.git
```

### Clone via SSH
```bash
git clone git@github.com:user/repo.git
```

### Clone into a custom folder name
```bash
git clone https://github.com/user/repo.git my-folder
```

### Clone only a specific branch
```bash
git clone -b develop https://github.com/user/repo.git
```

### Clone with limited history (faster for large repos)
```bash
git clone --depth 1 https://github.com/user/repo.git
```

## 🔄 What Happens When You Clone

```
Remote Repo (GitHub)
        ↓
  Full copy downloaded
        ↓
Local Repo created with:
  ├── All files
  ├── All branches
  ├── All commits
  └── remote "origin" auto-configured
```

## HTTPS vs SSH

| | HTTPS | SSH |
|---|---|---|
| Setup | No setup needed | Requires SSH key |
| Authentication | Username + password / token | SSH key pair |
| Best for | Quick/public repos | Regular contributors |

## ⚠️ Common Mistakes
- Cloning inside an existing repo folder
- Using HTTPS without a personal access token (GitHub removed password auth)

## 🔗 Related Commands
- [`git init`](./init.md)
- [`git remote`](../04-remote-workflows/remote.md)
- [`git fetch`](../04-remote-workflows/fetch.md)
