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
    "plugin:jsx-a11y/recommended",
  ],
  parser: "@typescript-eslint/parser",
  settings: {
    "import/resolver": {
      typescript: {},
      alias: {
        map: ["@", "./src"],
      },
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
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "prettier/prettier": "error",
    "react/button-has-type": "warn", // 버튼의 타입 지정
    "react/no-unescaped-entities": "warn", // ['>', '"', '\', '}'] 사용시 HTML escape code로 변경
  },
  ignorePatterns: [
    "**/*.css",
    "**/*.scss",
    "**/*.config.cjs",
    ".eslintrc.cjs",
  ],
};
