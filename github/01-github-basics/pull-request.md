# 🔃 Pull Request (PR)

## 📌 What it is
A Pull Request is a GitHub feature that lets you propose changes from your branch (or fork) to be merged into another branch. It's the standard way to contribute code, get reviews, and collaborate on GitHub.

---

## 🔄 Pull Request Workflow

```
Create branch
      ↓
Make changes & commit
      ↓
Push branch to GitHub
      ↓
Open Pull Request on GitHub
      ↓
Team reviews & leaves comments
      ↓
Make requested changes (if any)
      ↓
PR approved → Merged into target branch
      ↓
Branch deleted
```

---

## ✅ How to Create a Pull Request

### Step 1 — Create and push a branch
```bash
git switch -c feature/login-page
# make your changes
git add .
git commit -m "feat: add login page"
git push origin feature/login-page
```

### Step 2 — Open PR on GitHub
1. Go to your repo on GitHub
2. Click the **"Compare & pull request"** banner that appears
3. Set:
   - **Base branch** — where you want changes merged (e.g. `main`)
   - **Compare branch** — your feature branch
4. Write a clear **title** and **description**
5. Click **"Create pull request"**

---

## 📝 Writing a Good PR Description

```markdown
## What does this PR do?
Adds a login page with email/password authentication.

## Changes Made
- Created `login.html` with form
- Added `auth.py` with validation logic
- Updated `routes.py` to include /login endpoint

## How to Test
1. Run the app locally
2. Navigate to /login
3. Try submitting with valid and invalid credentials

## Screenshots (if UI changes)
[attach screenshot here]

## Related Issue
Closes #42
```

---

## 🔍 PR Review Process

### As a reviewer:
- Click **"Files changed"** tab to see the diff
- Leave inline comments on specific lines
- Use **"Review changes"** → Approve / Request changes / Comment

### As the PR author:
- Respond to all comments
- Push new commits to the same branch — PR updates automatically
- Once approved, click **"Merge pull request"**

---

## 🔀 Merge Options

| Option | What it does | Best for |
|---|---|---|
| **Merge commit** | Preserves all commits + adds merge commit | Full history tracking |
| **Squash and merge** | Combines all commits into one | Clean main branch history |
| **Rebase and merge** | Replays commits linearly | Linear history preference |

---

## 📋 PR Best Practices

- Keep PRs **small and focused** — one feature or fix per PR
- Link related issues with `Closes #issue-number` in description
- Add a **reviewer** before submitting
- Don't merge your own PRs without review (on team projects)
- Delete the branch after merging

---

## ⚠️ Common Mistakes
- Opening a PR with too many unrelated changes — hard to review
- Not syncing with base branch before opening PR — leads to conflicts
- Ignoring reviewer comments without responding

---

## 🔗 Related Topics
- [Fork](./fork.md)
- [Issues](./issues.md)
- [`git merge`](./git/03-branching-and-merging/merge.md)
- [`git rebase`](./git/03-branching-and-merging/rebase.md)
