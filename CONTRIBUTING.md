# 🤝 Contributing to Git-Github-Commands

Thank you for considering contributing! This repo is a community reference guide and every improvement helps developers worldwide.

---

## 📋 What You Can Contribute

- ✅ Add a missing Git or GitHub command
- ✅ Fix incorrect information or typos
- ✅ Improve existing explanations
- ✅ Add better examples
- ✅ Add new workflow examples
- ✅ Fix broken links

---

## 🚀 How to Contribute

### Step 1 — Fork the repo
Click the **Fork** button on GitHub to create your own copy.

### Step 2 — Clone your fork
```bash
git clone https://github.com/your-username/Git-Github-Commands.git
cd Git-Github-Commands
```

### Step 3 — Create a branch
```bash
git checkout -b add-git-stash-examples
# or
git checkout -b fix-typo-in-merge
```

Use descriptive branch names:
- `add-<command-name>` for new content
- `fix-<description>` for corrections
- `improve-<description>` for enhancements

### Step 4 — Make your changes
Follow the command file template below.

### Step 5 — Commit your changes
```bash
git add .
git commit -m "docs: add git stash examples"
```

Use conventional commit prefixes:
| Prefix | When to use |
|---|---|
| `docs:` | Adding or updating documentation |
| `fix:` | Fixing incorrect information |
| `feat:` | Adding a new command or section |
| `style:` | Formatting changes only |

### Step 6 — Push and open a Pull Request
```bash
git push origin add-git-stash-examples
```
Then go to GitHub → open a Pull Request against `main`.

---

## 📝 Command File Template

Every command `.md` file must follow this structure:

# git <command>

## 📌 What it does
One or two sentence explanation of the command's purpose.

## 🔧 Syntax
\```bash
git <command> [options]
\```

## ✅ Examples

### Basic usage
\```bash
git <command> example
\```

### Advanced usage
\```bash
git <command> --flag example
\```

## 📋 Options Reference (if applicable)
| Flag | Description |
|---|---|
| `--flag` | What it does |

## ⚠️ Common Mistakes
- Mistake 1 and how to avoid it
- Mistake 2 and how to avoid it

## 🔗 Related Commands
- [`git related`](./related.md)


---

## 📂 Where to Put New Files

| Content type | Location |
|---|---|
| New Git command | `git/XX-category/command.md` |
| New GitHub feature | `github/0X-category/feature.md` |
| New workflow example | `examples/` |
| Cheatsheet update | `CHEATSHEET.md` |

---

## ✅ Checklist Before Submitting PR

- [ ] File is in the correct folder
- [ ] File follows the command template
- [ ] All code examples are wrapped in triple backticks with `bash`
- [ ] Related commands are cross-linked
- [ ] No spelling mistakes
- [ ] README.md updated if a new file was added

---

## 💬 Questions?

Open an [Issue](https://github.com/Ankit-Tank/Git-Github-Commands/issues) with the label `question`.

---

<div align="center">
  <sub>Thank you for making this resource better for everyone! ❤️</sub>
</div>
