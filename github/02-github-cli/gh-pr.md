# gh pr

## 📌 What it does
Creates, reviews, merges, and manages Pull Requests directly from the terminal without opening GitHub in a browser.

---

## 🔧 Syntax
```bash
gh pr <command>
```

## ✅ Examples

### Create a Pull Request
```bash
gh pr create
gh pr create --title "Add login page" --body "Adds login form with validation"
gh pr create --base main --head feature/login
gh pr create --draft   # open as draft PR
gh pr create --web     # open creation form in browser
```

### List Pull Requests
```bash
gh pr list
gh pr list --state open
gh pr list --state closed
gh pr list --state merged
gh pr list --author Ankit-Tank
gh pr list --label bug
```

### View a Pull Request
```bash
gh pr view
gh pr view 42
gh pr view 42 --web   # open in browser
```

### Check out a PR branch locally (for testing)
```bash
gh pr checkout 42
```

### Review a PR
```bash
gh pr review 42 --approve
gh pr review 42 --request-changes --body "Please fix the tests"
gh pr review 42 --comment --body "Looks good overall"
```

### Merge a PR
```bash
gh pr merge 42
gh pr merge 42 --merge        # standard merge commit
gh pr merge 42 --squash       # squash all commits into one
gh pr merge 42 --rebase       # rebase and merge
gh pr merge 42 --delete-branch  # delete branch after merging
```

### Close a PR without merging
```bash
gh pr close 42
```

### Reopen a closed PR
```bash
gh pr reopen 42
```

### Check PR status / CI checks
```bash
gh pr checks 42
gh pr status   # show status of all your PRs
```

### Edit a PR
```bash
gh pr edit 42 --title "Updated title"
gh pr edit 42 --add-label "bug"
gh pr edit 42 --add-reviewer username
```

---

## 📋 Create PR with Full Options

```bash
gh pr create \
  --title "feat: add user authentication" \
  --body "Adds login and signup with JWT tokens. Closes #38" \
  --base main \
  --head feature/auth \
  --reviewer teammate1 \
  --label enhancement \
  --draft
```

---

## 🔄 Typical PR Workflow via CLI

```bash
# 1. Create feature branch and make changes
git switch -c feature/dashboard
git add . && git commit -m "feat: add dashboard"
git push origin feature/dashboard

# 2. Create PR from terminal
gh pr create --title "Add dashboard" --body "Closes #12"

# 3. Check PR status
gh pr status

# 4. After approval — merge
gh pr merge --squash --delete-branch
```

---

## ⚠️ Common Mistakes
- Running `gh pr create` without pushing branch first — will fail
- Merging without checking CI status — use `gh pr checks` first

## 🔗 Related Topics
- [Pull Request](../01-github-basics/pull-request.md)
- [gh repo](./gh-repo.md)
- [gh issue](./gh-issue.md)
