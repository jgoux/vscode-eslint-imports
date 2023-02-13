# Getting started

```sh
pnpm i
```

# How to reproduce

1. Open [router.ts](apps/api/src/routes/router.ts), VSCode ESLint is not reporting the error on line 1

2. Run ESLint CLI:

```sh
# Run ESLint CLI
cd apps/api
pnpm eslint src/routes/router.ts
```

The error is reported on line 1