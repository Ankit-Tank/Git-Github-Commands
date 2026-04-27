# git help

## 📌 What it does
Displays documentation for any Git command directly in the terminal or browser.

## 🔧 Syntax
```bash
git help <command>
git <command> --help
git <command> -h
```

## ✅ Examples

### Open full manual for a command
```bash
git help commit
git help merge
```

### Quick one-page summary in terminal
```bash
git commit -h
git merge -h
```

### List all available Git commands
```bash
git help -a
```

### List common Git guides
```bash
git help -g
```

## 📖 Help Output Types

| Flag | Output |
|---|---|
| `git help <cmd>` | Full man page (opens in browser or terminal) |
| `git <cmd> --help` | Same as above |
| `git <cmd> -h` | Short summary in terminal |
| `git help -a` | All available commands |

## ⚠️ Notes
- On Windows, `git help` opens a browser-based HTML page
- On Linux/macOS, it opens the man page in terminal

## 🔗 Related Commands
- [`git config`](./config.md)
