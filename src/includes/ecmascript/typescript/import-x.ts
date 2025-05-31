import { flatConfigs } from 'eslint-plugin-import-x'
import { defineConfig } from 'eslint/config'

import { GLOB_SRC } from '@antfu/eslint-config'
import { type ExtendsElement } from '@eslint/config-helpers'

export const importXConfig = defineConfig(
  {
    extends: [
      flatConfigs.recommended as ExtendsElement,
      flatConfigs.react as ExtendsElement,
      flatConfigs['react-native'] as ExtendsElement,
      flatConfigs.typescript as ExtendsElement,
    ],
    files: [GLOB_SRC],
    rules: {
      'import-x/consistent-type-specifier-style': ['error', 'prefer-inline'],
      'import-x/exports-last': 'warn',
      'import-x/group-exports': 'warn',
      'import-x/newline-after-import': ['error', { count: 1 }],
      'import-x/no-default-export': 'error',
      'import-x/no-duplicates': ['warn', { 'prefer-inline': true }],
      'import-x/no-mutable-exports': 'error',
      'import-x/no-named-default': 'error',
      'import-x/no-self-import': 'error',
      'import-x/no-useless-path-segments': [
        'error',
        {
          noUselessIndex: true,
        },
      ],
      'import-x/no-webpack-loader-syntax': 'error',
    },
    settings: {
      'import-x/internal-regex': '^@/',
    },
  },
  {
    files: ['*.vue', '*.test.ts'],
    rules: {
      'import-x/no-default-export': 'off',
    },
  },
  {
    files: [
      'vite.*.*',
      'vitest.*.*',
      'playwright.*.*',
      'eslint.*.*',
      'src/index.ts',
      'src/index.js',
      '.projenrc.*',
    ],
    rules: {
      'import-x/no-default-export': 'off',
      'import-x/no-unused-modules': 'off',
    },
  },
)
