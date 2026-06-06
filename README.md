# Safe Change DevOps Starter

This small project teaches the DevOps flow:

1. Make a small code change.
2. Run linting.
3. Run automated tests.
4. Build an artifact.
5. Open a pull request.
6. Merge only after the quality gate passes.
7. Tag the release and update the changelog.

## Requirements

- Node.js 22 or newer
- Git
- A GitHub account
- VS Code is recommended

## Run locally

```bash
npm install
npm run lint
npm test
npm run build
npm start
```

Then open:

```text
http://localhost:3000/health
```

Expected response:

```json
{"status":"ok","service":"safe-change-demo"}
```

## Suggested Git flow

```bash
git init
git add .
git commit -m "chore: create safe change demo"
git branch -M main
```

Create a repository on GitHub, then push:

```bash
git remote add origin https://github.com/YOUR-USERNAME/safe-change-devops-starter.git
git push -u origin main
```

Create a release branch:

```bash
git checkout -b release/v1.0.0
git push -u origin release/v1.0.0
```

Tag the release:

```bash
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0
```
