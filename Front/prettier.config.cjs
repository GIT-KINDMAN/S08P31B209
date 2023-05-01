module.exports = {
  singleQuote: false,
  arrowParens: "always",
  semi: true,
  useTabs: false,
  tabWidth: 2,
  printWidth: 80,
  trailingComma: "all",
  endOfLine: "auto",
  bracketSpacing: true,
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.cjs',
}