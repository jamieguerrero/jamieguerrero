module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "import/prefer-default-export": 1,
    "no-return-assign": 0,
    "react/jsx-props-no-spreading": 0,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier", "react-app"],
};
