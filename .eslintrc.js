module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "standard-with-typescript",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parserOptions: {
    project: ["path/to/your/tsconfig/file"],
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
  },
};
