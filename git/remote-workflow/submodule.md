# git submodule

## 📌 What it does
Allows you to include another Git repository inside your repository as a subdirectory. Useful for managing shared libraries or external dependencies.

## 🔧 Syntax
```bash
git submodule add <url> [path]
git submodule update --init
```

## ✅ Examples

### Add a submodule
```bash
git submodule add https://github.com/user/library.git libs/library
```

### Initialize and clone all submodules (after cloning a repo)
```bash
git submodule update --init
git submodule update --init --recursive    # nested submodules too
```

### Clone a repo with all submodules at once
```bash
git clone --recurse-submodules https://github.com/user/repo.git
```

### Update all submodules to latest
```bash
git submodule update --remote
```

### List all submodules
```bash
git submodule status
```

### Remove a submodule
```bash
git submodule deinit libs/library
git rm libs/library
rm -rf .git/modules/libs/library
```

## 📂 What Gets Created

```
your-repo/
├── .gitmodules       ← config file tracking all submodules
└── libs/
    └── library/      ← submodule lives here (separate .git)
```

`.gitmodules` contents:
```
[submodule "libs/library"]
    path = libs/library
    url = https://github.com/user/library.git
```

## ⚠️ Common Mistakes
- Cloning a repo without `--recurse-submodules` — submodule folder appears empty
- Forgetting to run `git submodule update --init` after pulling new submodule additions
- Submodules can be complex — only use them when truly necessary

## 🔗 Related Commands
- [`git clone`](../01-setup/clone.md)
- [`git pull`](./pull.md)
