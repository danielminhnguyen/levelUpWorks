module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    commonjs: true,
    amd: true,
  },
  settings: {
    "import/resolver": {
      node: {
        moduleDirectory: ["node_modules", "/frontend/src"],
      },
    },
  },
  extends: ["airbnb", "plugin:react/recommended"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
    project: "./package.json",
  },
  plugins: ["react", "import"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    quotes: ["error", "double", { avoidEscape: true }],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true, packageDir: "./" }],
  },
};
