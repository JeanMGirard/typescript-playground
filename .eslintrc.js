module.exports =  {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    "@typescript-eslint",
    "eslint-plugin-tsdoc"
  ],
  extends: [
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    "tsdoc/syntax": "warn",
    "@typescript-eslint/no-empty-function": 1
  }
}
