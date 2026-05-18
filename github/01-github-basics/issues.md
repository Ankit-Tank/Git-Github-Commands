# 🐛 Issues

## 📌 What it is
GitHub Issues is a built-in tracking system for bugs, feature requests, tasks, and discussions. Every issue gets a number (`#1`, `#2`...) and can be linked to commits, branches, and Pull Requests.

---

## ✅ How to Create an Issue

1. Go to your repo on GitHub
2. Click **Issues** tab → **New issue**
3. Fill in:
   - **Title** — short, clear summary
   - **Description** — detailed explanation (use the template below)
   - **Labels** — `bug`, `enhancement`, `documentation`, etc.
   - **Assignees** — who should work on it
   - **Milestone** — which version/sprint it belongs to
4. Click **Submit new issue**

---

## 📝 Good Issue Templates

### 🐛 Bug Report
```markdown
## Bug Description
Clicking the login button throws a 500 error.

## Steps to Reproduce
1. Go to /login
2. Enter valid credentials
3. Click Submit
4. See error

## Expected Behavior
User should be redirected to /dashboard

## Actual Behavior
500 Internal Server Error is shown

## Environment
- OS: Windows 11
- Browser: Chrome 120
- Python: 3.11
```

### 💡 Feature Request
```markdown
## Feature Description
Add dark mode toggle to the settings page.

## Why is this needed?
Many users have requested it — improves readability at night.

## Proposed Solution
Add a toggle in Settings > Appearance that switches the CSS theme.

## Alternatives Considered
Browser extension — but built-in is better UX.
```

---

## 🏷️ Issue Labels

| Label | When to use |
|---|---|
| `bug` | Something is broken |
| `enhancement` | New feature or improvement |
| `documentation` | Docs need updating |
| `good first issue` | Great for new contributors |
| `help wanted` | Extra attention needed |
| `question` | Needs clarification |
| `wontfix` | Intentionally not being fixed |
| `duplicate` | Already reported |

---

## 🔗 Linking Issues to Code

### Close an issue automatically via commit message:
```bash
git commit -m "fix: resolve login error — closes #42"
```

Keywords that auto-close issues on merge:
```
closes #42
fixes #42
resolves #42
```

### Reference an issue without closing:
```bash
git commit -m "feat: add form validation — related to #38"
```

---

## 📋 Issue vs Pull Request

| | Issue | Pull Request |
|---|---|---|
| Purpose | Track problems/ideas | Propose code changes |
| Contains code | ❌ | ✅ |
| Can be assigned | ✅ | ✅ |
| Can be linked | ✅ (to PRs) | ✅ (to issues) |

---

## ⚠️ Common Mistakes
- Creating vague issues like "it doesn't work" — always include steps to reproduce
- Not using labels — makes issues hard to filter
- Forgetting to close issues after fixing — use `closes #N` in PR/commit

---

## 🔗 Related Topics
- [Pull Request](./pull-request.md)
- [Fork](./fork.md)
