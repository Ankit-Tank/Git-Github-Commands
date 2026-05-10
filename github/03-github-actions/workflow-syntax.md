# 📄 Workflow Syntax

Complete reference for GitHub Actions YAML workflow syntax.

---

## 📁 File Location

All workflow files must be placed in:
```
.github/workflows/<filename>.yml
```

---

## 🏗️ Full Workflow Structure

```yaml
name: Workflow Name           # shown in Actions tab

on:                           # triggers
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]
  schedule:
    - cron: '0 9 * * 1'      # every Monday at 9am
  workflow_dispatch:           # manual trigger button

env:                          # global environment variables
  APP_ENV: production

jobs:
  job-name:                   # job ID (your choice)
    name: Display Name        # shown in UI
    runs-on: ubuntu-latest    # runner

    env:                      # job-level env vars
      DB_URL: localhost

    steps:
      - name: Step Name
        run: echo "hello"
```

---

## ⚡ Triggers (`on`)

### Push to specific branches
```yaml
on:
  push:
    branches:
      - main
      - 'release/*'    # wildcard
    paths:
      - 'src/**'       # only trigger if src/ changes
```

### Pull Request events
```yaml
on:
  pull_request:
    types: [opened, synchronize, reopened]
    branches: [main]
```

### Scheduled (cron)
```yaml
on:
  schedule:
    - cron: '0 0 * * *'    # every day at midnight UTC
```

Cron format: `minute hour day month weekday`

### Manual trigger
```yaml
on:
  workflow_dispatch:
    inputs:
      environment:
        description: 'Deploy environment'
        required: true
        default: 'staging'
```

---

## 💼 Jobs

### Basic job
```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - run: echo "Running tests"
```

### Job dependencies (sequential)
```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - run: npm test

  deploy:
    needs: test            # waits for test to pass
    runs-on: ubuntu-latest
    steps:
      - run: npm run deploy
```

### Job matrix (run on multiple configs)
```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        python-version: ['3.10', '3.11', '3.12']
    steps:
      - uses: actions/setup-python@v5
        with:
          python-version: ${{ matrix.python-version }}
      - run: python --version
```

---

## 🔢 Steps

### Run a shell command
```yaml
steps:
  - name: Install dependencies
    run: pip install -r requirements.txt
```

### Multi-line commands
```yaml
steps:
  - name: Setup and test
    run: |
      pip install -r requirements.txt
      python -m pytest
      echo "Done"
```

### Use a pre-built Action
```yaml
steps:
  - uses: actions/checkout@v4          # checkout repo code
  - uses: actions/setup-python@v5      # setup Python
    with:
      python-version: '3.11'
```

### Conditional step
```yaml
steps:
  - name: Deploy only on main
    if: github.ref == 'refs/heads/main'
    run: echo "Deploying..."
```

### Step with environment variable
```yaml
steps:
  - name: Print secret
    env:
      API_KEY: ${{ secrets.API_KEY }}
    run: echo "Key loaded"
```

---

## 🔐 Secrets & Variables

### Using secrets (for passwords, tokens)
```yaml
# Store in: Repo → Settings → Secrets and variables → Actions
env:
  TOKEN: ${{ secrets.MY_TOKEN }}
```

### Using variables (non-sensitive config)
```yaml
env:
  APP_NAME: ${{ vars.APP_NAME }}
```

---

## 📦 Common Actions (Marketplace)

| Action | What it does |
|---|---|
| `actions/checkout@v4` | Check out repo code |
| `actions/setup-python@v5` | Install Python version |
| `actions/setup-node@v4` | Install Node.js version |
| `actions/upload-artifact@v4` | Save files between jobs |
| `actions/download-artifact@v4` | Download saved files |
| `actions/cache@v4` | Cache dependencies for speed |

---

## 📋 Context Variables

| Variable | Value |
|---|---|
| `github.actor` | Username who triggered the workflow |
| `github.ref` | Branch or tag ref (`refs/heads/main`) |
| `github.sha` | Full commit hash |
| `github.event_name` | Event that triggered (`push`, `pull_request`) |
| `github.repository` | `owner/repo-name` |
| `runner.os` | `Linux`, `Windows`, `macOS` |

---

## 🔗 Related Topics
- [Overview](./overview.md)
- [Common Workflows](./common-workflows.md)
