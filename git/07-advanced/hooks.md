# git hooks

## 📌 What it does
Hooks are scripts that Git automatically runs before or after specific events — like committing, pushing, or merging. Used to automate checks, formatting, tests, and notifications.

## 📂 Where Hooks Live

```
.git/hooks/
├── pre-commit          ← runs before commit is created
├── commit-msg          ← runs to validate commit message
├── post-commit         ← runs after commit is created
├── pre-push            ← runs before pushing
├── post-merge          ← runs after merge
├── pre-rebase          ← runs before rebase
└── (many more...)
```

Sample files with `.sample` extension are already there — rename them to activate.

## 🔧 How to Create a Hook

### Step 1 — Create the hook file
```bash
# Example: pre-commit hook
touch .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit   # make it executable
```

### Step 2 — Write the script
```bash
#!/bin/sh
# This runs before every commit

echo "Running pre-commit checks..."
python -m pytest tests/          # run tests

if [ $? -ne 0 ]; then
  echo "Tests failed! Commit blocked."
  exit 1                         # non-zero = block the commit
fi

echo "All checks passed!"
exit 0                           # 0 = allow the commit
```

## ✅ Common Hook Examples

### pre-commit — Block commit if tests fail
```bash
#!/bin/sh
npm test
if [ $? -ne 0 ]; then
  echo "Fix tests before committing."
  exit 1
fi
```

### commit-msg — Enforce message format
```bash
#!/bin/sh
MSG=$(cat "$1")
if ! echo "$MSG" | grep -qE "^(feat|fix|docs|style|refactor|test|chore):"; then
  echo "Bad commit message format!"
  echo "Use: feat: | fix: | docs: | etc."
  exit 1
fi
```

### pre-push — Run linter before pushing
```bash
#!/bin/sh
echo "Running linter..."
flake8 .
if [ $? -ne 0 ]; then
  echo "Fix lint errors before pushing."
  exit 1
fi
```

## 📋 All Hook Types

| Hook | When it runs | Common use |
|---|---|---|
| `pre-commit` | Before commit | Run tests, linting |
| `commit-msg` | After message written | Validate message format |
| `post-commit` | After commit | Notifications |
| `pre-push` | Before push | Final test run |
| `post-merge` | After merge | Install dependencies |
| `pre-rebase` | Before rebase | Safety checks |
| `post-checkout` | After checkout | Environment setup |

## 🌍 Sharing Hooks with Team

`.git/hooks/` is not committed to the repo. To share hooks:

```
project/
├── .git/hooks/      ← local only, not shared
└── scripts/hooks/   ← commit these to repo
    └── pre-commit
```

Then in setup instructions:
```bash
cp scripts/hooks/pre-commit .git/hooks/
chmod +x .git/hooks/pre-commit
```

Or use tools like **Husky** (Node.js) or **pre-commit** (Python) to manage shared hooks automatically.

## ⚠️ Common Mistakes
- Forgetting `chmod +x` — hook won't run without execute permission
- Writing hooks that are too slow — slows down every commit/push
- Not sharing hooks with team — defeats the purpose of standardization

## 🔗 Related Commands
- [`git commit`](../02-staging-and-committing/commit.md)
- [`git push`](../04-remote-workflows/push.md)
- [`git config`](../01-setup/config.md)
