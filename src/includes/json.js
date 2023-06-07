// @ts-check
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  overrides: [
    {
      files: ['*.json', '*.json5', '*.jsonc'],
      extends: [
        'plugin:jsonc/recommended-with-json',
        'plugin:json-schema-validator/recommended',
        'plugin:jsonc/prettier',
      ],
      rules: {
        'json-files/sort-package-json': 'warn',
        'json-files/require-unique-dependency-names': 'warn',
      },
      parser: 'jsonc-eslint-parser',
      plugins: ['json-files'],
    },
  ],
})
