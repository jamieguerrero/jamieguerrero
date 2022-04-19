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
  plugins: ["react", "css-modules"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "no-return-assign": 0,
    "import/prefer-default-export": 0,
    "react/jsx-props-no-spreading": 0,
    "global-require": 0,
    "import/extensions": 0,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "react-app",
    "plugin:css-modules/recommended",
  ],
};
