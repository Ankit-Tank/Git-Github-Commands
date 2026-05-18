# gh issue

## 📌 What it does
Creates, lists, views, and manages GitHub Issues directly from the terminal.

---

## 🔧 Syntax
```bash
gh issue <command>
```

## ✅ Examples

### Create an issue
```bash
gh issue create
gh issue create --title "Login button broken" --body "Clicking login causes 500 error"
gh issue create --title "Add dark mode" --label enhancement
gh issue create --web   # open creation form in browser
```

### List issues
```bash
gh issue list
gh issue list --state open
gh issue list --state closed
gh issue list --label bug
gh issue list --assignee Ankit-Tank
gh issue list --limit 20
```

### View an issue
```bash
gh issue view 42
gh issue view 42 --web   # open in browser
```

### Comment on an issue
```bash
gh issue comment 42 --body "Working on this now, should be fixed by EOD"
```

### Close an issue
```bash
gh issue close 42
gh issue close 42 --comment "Fixed in PR #45"
```

### Reopen a closed issue
```bash
gh issue reopen 42
```

### Edit an issue
```bash
gh issue edit 42 --title "Updated title"
gh issue edit 42 --add-label "priority"
gh issue edit 42 --add-assignee Ankit-Tank
gh issue edit 42 --remove-label "wontfix"
```

### Pin an issue (makes it appear at top)
```bash
gh issue pin 42
gh issue unpin 42
```

### Transfer an issue to another repo
```bash
gh issue transfer 42 Ankit-Tank/other-repo
```

### Delete an issue
```bash
gh issue delete 42
```

---

## 📋 Create Issue with Full Options

```bash
gh issue create \
  --title "bug: login page crashes on Safari" \
  --body "Steps: 1. Open Safari 2. Go to /login 3. See crash" \
  --label "bug" \
  --label "priority" \
  --assignee Ankit-Tank \
  --milestone "v1.1"
```

---

## 🔄 Typical Issue Workflow via CLI

```bash
# 1. Create issue
gh issue create --title "feat: add search bar" --label enhancement

# 2. List open issues
gh issue list --state open

# 3. View details of issue #7
gh issue view 7

# 4. After fixing — close with comment
gh issue close 7 --comment "Fixed in PR #12"
```

---

## ⚠️ Common Mistakes
- Creating issues without labels — hard to filter and organize later
- Not closing issues after fixing — board gets cluttered

## 🔗 Related Topics
- [Issues](../01-github-basics/issues.md)
- [gh pr](./gh-pr.md)
- [gh repo](./gh-repo.md)
