# gh auth

## 📌 What it does
Authenticates the GitHub CLI with your GitHub account so all other `gh` commands work without needing a browser or token manually.

---

## 🔧 Syntax
```bash
gh auth <command>
```

## ✅ Examples

### Login to GitHub
```bash
gh auth login
```
Follow the prompts:
1. Choose **GitHub.com**
2. Choose **HTTPS** or **SSH**
3. Choose **Login with browser** (recommended) or paste token
4. Authenticate in browser → CLI is connected

### Check login status
```bash
gh auth status
```

### Logout
```bash
gh auth logout
```

### Refresh token (re-authenticate)
```bash
gh auth refresh
```

### Login with a Personal Access Token
```bash
gh auth login --with-token < token.txt
# or
echo "YOUR_TOKEN" | gh auth login --with-token
```

---

## 📋 Auth Status Output

```
github.com
  ✓ Logged in to github.com as Ankit-Tank
  ✓ Git operations configured for HTTPS
  ✓ Token: ghp_xxxxxxxxxxxx
```

---

## 🔑 HTTPS vs SSH

| | HTTPS | SSH |
|---|---|---|
| Setup | Easier | Requires SSH key |
| Token needed | ✅ Yes (auto-managed by gh) | ❌ No |
| Best for | Most users | Advanced users |

---

## ⚠️ Common Mistakes
- Running other `gh` commands before authenticating — all will fail
- Using an expired token — run `gh auth refresh`

## 🔗 Related Topics
- [gh repo](./gh-repo.md)
- [gh pr](./gh-pr.md)
