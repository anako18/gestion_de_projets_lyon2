module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/strongly-recommended',
    'eslint:recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: {
          max: 2
        },
        multiline: {
          max: 1
        }
      }
    ]
  }
}
