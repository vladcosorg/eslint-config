// @ts-check
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  parserOptions: { project: 'tsconfig.json' },
  overrides: [
    {
      files: ['*.ts', '*.js', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/strict',
      ],
      rules: {
        'no-undef': 0,
        'node/no-missing-import': 'off',
        camelcase: 'off',
        '@typescript-eslint/member-ordering': 'warn',
        '@typescript-eslint/consistent-type-imports': 'warn',
        '@typescript-eslint/method-signature-style': 'warn',
        '@typescript-eslint/no-confusing-void-expression': 'warn',
        '@typescript-eslint/no-redundant-type-constituents': 'warn',
        '@typescript-eslint/no-require-imports': 'warn',
        '@typescript-eslint/prefer-enum-initializers': 'warn',
        'no-return-await': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/return-await': 'warn',
        '@typescript-eslint/switch-exhaustiveness-check': 'warn',
        '@typescript-eslint/sort-type-constituents': 'warn',
        '@typescript-eslint/promise-function-async': 'warn',
        '@typescript-eslint/array-type': ['warn', { default: 'array-simple' }],
      },
    },
    {
      files: ['*.test.ts'],
      rules: {
        '@typescript-eslint/require-await': 'off',
      },
    },
  ],
})
