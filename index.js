module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "unused-imports", "import"],
  rules: {
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "import/extensions": 0,
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    "import/order": [
      2,
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: "components/**",
            group: "internal",
          },
          {
            pattern: "generated/**",
            group: "internal",
          },
        ],
        pathGroupsExcludedImportTypes: ["internal"],
        groups: [
          ["builtin", "external"],
          "internal",
          ["parent", "sibling", "index"],
        ],
        "newlines-between": "always",
      },
    ],
  },
};
