module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
    "plugin:import/recommended",
  ],
  parser: "@typescript-eslint/parser",
  settings: {
    "import/resolver": {
      typescript: {},
      alias: [
        ["@", "./src"],
        ["@atomic", "./src/component"],
        ["@store", "./src/store"],
      ],
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "tsconfig.json",
  },
  plugins: [
    "react",
    "react-hooks",
    "react-refresh",
    "storybook",
    "import",
    "prettier",
  ],
  rules: {
    "react-refresh/only-export-components": "warn",
    "prettier/prettier": "error",
    "react/button-has-type": "off", // 버튼의 타입 지정
    "react/no-unescaped-entities": "warn", // ['>', '"', '\', '}'] 사용시 HTML escape code로 변경
    "react/no-children-prop": [
      "warn",
      {
        allowFunctions: true,
      },
    ],
  },
  ignorePatterns: [
    "**/*.css",
    "**/*.scss",
    "**/*.config.js",
    "**/*.config.cjs",
    "**/*.config.ts",
    ".eslintrc.cjs",
  ],
};
