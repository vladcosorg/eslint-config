import unicorn from 'eslint-plugin-unicorn'
import { defineConfig } from 'eslint/config'

export const unicornConfig = defineConfig(
  {
    extends: [unicorn.configs.recommended],
    files: [
      '**/*.js',
      '**/*.ts',
      '**/*.mts',
      '**/*.mjs',
      '**/*.mtx',
      '**/*.tsx',
    ],
    rules: {
      'unicorn/prefer-at': 'warn',
    },
  },
  {
    files: ['.eslintrc.js'],
    rules: {
      'unicorn/prefer-module': 'off',
    },
  },
  {
    files: ['*.vue'],
    rules: {
      'unicorn/prevent-abbreviations': [
        'error',
        {
          allowList: {
            props: true,
          },
        },
      ],
    },
  },
  {
    files: ['*.tsx', '*.ts'],
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            kebabCase: true,
            pascalCase: true,
          },
        },
      ],
      'unicorn/prevent-abbreviations': [
        'error',
        {
          ignore: [/Ref$/],
          replacements: {
            prop: false,
            props: false,
            ref: false,
            refs: false,
          },
        },
      ],
    },
  },
)
