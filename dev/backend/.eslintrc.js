module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "standard"
  ],
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"]
  }
};
