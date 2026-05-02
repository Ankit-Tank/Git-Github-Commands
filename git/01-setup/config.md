# git config

## 📌 What it does
Configures Git settings at global, local, or system level. Used to set your identity, editor, aliases, and behavior preferences.

## 🔧 Syntax
```bash
git config [--global | --local | --system] <key> <value>
```

## ✅ Examples

### Set your identity (required before first commit)
```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

### Set default editor
```bash
git config --global core.editor "code --wait"   # VS Code
git config --global core.editor "vim"            # Vim
```

### Set default branch name
```bash
git config --global init.defaultBranch main
```

### View all config settings
```bash
git config --list
```

### View a specific setting
```bash
git config user.name
```

### Create command shortcuts (aliases)
```bash
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.lg "log --oneline --graph"
```

## 🌍 Config Levels

| Level | Flag | Scope | File Location |
|---|---|---|---|
| System | `--system` | All users on machine | `/etc/gitconfig` |
| Global | `--global` | Current user | `~/.gitconfig` |
| Local | `--local` | Current repo only | `.git/config` |

> Local overrides Global, Global overrides System.

## ⚠️ Common Mistakes
- Forgetting to set `user.name` and `user.email` before first commit
- Using `--local` when you meant `--global` (settings won't apply to other repos)

## 🔗 Related Commands
- [`git init`](./init.md)
- [`git help`](./help.md)
