module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier', '@vue/typescript'],
  rules: {
    'no-console': 0
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
