module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    quotes: ["error", "double", { avoidEscape: true }],
    "no-console": 0,
    "import/extensions": 1,
    "comma-dangle": ["error", "never"],
  },
};
