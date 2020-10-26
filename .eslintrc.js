module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:vue/essential", "airbnb-base", "prettier", "prettier/vue"],
  parserOptions: {
    ecmaVersion: 12,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  ignorePatterns: [".postcss*", "tailwind.*", "**/dist/*"],
  rules: {},
};
