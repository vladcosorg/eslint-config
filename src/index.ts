// @ts-check
import { defineConfig } from 'eslint-define-config'
// Fix eslint shareable config (https://github.com/eslint/eslint/issues/3458)
require('@rushstack/eslint-patch/modern-module-resolution')
module.exports = defineConfig({
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['.eslintrc.js'],
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    './includes/eslint.js',
    './includes/typescript-eslint.js',
    './includes/vue.js',
    './includes/react.js',
    './includes/tailwind.js',
    './includes/sonar.js',
    './includes/import.js',
    './includes/unused-imports.js',
    './includes/unicorn.js',
    './includes/promise.js',
    // './includes/canonical.js',
    './includes/json.js',
    // './includes/node.js',
    'prettier',
  ],
  globals: {},
  rules: {},
  plugins: [],
})
