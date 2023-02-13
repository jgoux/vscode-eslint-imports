/**
 * @type { import("eslint").Linter.Config }
 */
module.exports = {
  env: {
    es2022: true,
    node: true,
  },
  root: true,
  extends: [
    "eslint:recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: [
    "no-relative-import-paths",
  ],
  rules: {
    "no-relative-import-paths/no-relative-import-paths": [
      "error",
      { "allowSameFolder": true, "rootDir": "src", "prefix": "~" },
    ],
  }
};
