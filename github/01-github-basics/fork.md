# 🍴 Fork

## 📌 What it is
A fork is your personal copy of someone else's repository on GitHub. It lives in your GitHub account and lets you freely experiment, make changes, and contribute back — without affecting the original repo.

---

## 🔄 Fork vs Clone

| | Fork | Clone |
|---|---|---|
| Where it lives | Your GitHub account | Your local machine |
| Connected to original | ✅ Yes (upstream) | Only if you set it up |
| Used for | Contributing to others' repos | Working locally on any repo |
| Done via | GitHub UI | Terminal (`git clone`) |

---

## ✅ How to Fork a Repo

### Step 1 — Click Fork on GitHub
Go to any repo → click the **Fork** button (top right) → select your account.

GitHub creates `your-username/repo-name` as a copy.

### Step 2 — Clone your fork locally
```bash
git clone https://github.com/your-username/repo-name.git
cd repo-name
```

### Step 3 — Add the original repo as upstream
```bash
git remote add upstream https://github.com/original-owner/repo-name.git
git remote -v
# origin    https://github.com/your-username/repo-name.git
# upstream  https://github.com/original-owner/repo-name.git
```

### Step 4 — Keep your fork up to date
```bash
git fetch upstream
git merge upstream/main
git push origin main
```

---

## 🔄 Full Fork Contribution Workflow

```
Original Repo (upstream)
        ↓ fork
Your GitHub Repo (origin)
        ↓ clone
Your Local Machine
        ↓ create branch, make changes, commit
        ↓ push to origin
Your GitHub Repo
        ↓ open Pull Request
Original Repo ← your changes proposed
```

---

## 📋 When to Fork

| Situation | Fork? |
|---|---|
| Contributing to open source | ✅ Yes |
| Using someone's project as a base | ✅ Yes |
| Collaborating on a team repo | ❌ Use branches instead |
| Just want to read the code | ❌ Just clone |

---

## ⚠️ Common Mistakes
- Forgetting to add `upstream` — can't sync with original repo later
- Making changes directly on `main` of fork — always create a feature branch
- Not syncing fork before opening a Pull Request — causes merge conflicts

---

## 🔗 Related Topics
- [Pull Request](./pull-request.md)
- [`git remote`](../../git/04-remote-workflow/remote.md)
- [`git fetch`](../../git/04-remote-workflow/fetch.md)
