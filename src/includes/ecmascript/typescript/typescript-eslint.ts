import { typescript } from 'eslint-config-canonical'
import { recommended as typeChecked } from 'eslint-config-canonical/typescript-type-checking'
import { config, configs } from 'typescript-eslint'

import { GLOB_TS, GLOB_TSX } from '@antfu/eslint-config'
import { type ConfigWithExtendsArray } from '@eslint/config-helpers'

export const typescriptEslint = config(
  {
    extends: [
      configs.recommendedTypeChecked,
      typescript.recommended,
      typeChecked,
    ],
    files: [GLOB_TS, GLOB_TSX],
    rules: {
      '@typescript-eslint/array-type': ['warn', { default: 'array-simple' }],
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/member-ordering': 'warn',
      '@typescript-eslint/method-signature-style': 'warn',
      '@typescript-eslint/no-confusing-void-expression': 'warn',
      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: { attributes: false } },
      ],
      '@typescript-eslint/no-redundant-type-constituents': 'warn',
      '@typescript-eslint/no-require-imports': 'warn',
      '@typescript-eslint/prefer-enum-initializers': 'warn',
      '@typescript-eslint/promise-function-async': 'warn',
      '@typescript-eslint/return-await': 'warn',
      '@typescript-eslint/switch-exhaustiveness-check': 'warn',
      camelcase: 'off',
      'no-return-await': 'off',
      'no-undef': 0,
      'node/no-missing-import': 'off',
    },
  },

  {
    files: ['*.test.ts'],
    rules: {
      '@typescript-eslint/require-await': 'off',
    },
  },
) as ConfigWithExtendsArray
