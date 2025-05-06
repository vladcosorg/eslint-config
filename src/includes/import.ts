import importPlugin from 'eslint-plugin-import'
import { defineConfig } from 'eslint/config'

export const importConfig = defineConfig(
  {
    extends: [
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
    files: [
      '**/*.js',
      '**/*.ts',
      '**/*.mts',
      '**/*.mjs',
      '**/*.mtx',
      '**/*.tsx',
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'import/default': 'off',
      'import/dynamic-import-chunkname': [
        'warn',
        {
          webpackChunknameFormat: '[a-zA-Z0-57-9-/_]+',
        },
      ],
      'import/exports-last': 'warn',
      'import/group-exports': 'warn',
      // disable for performance reasosn
      'import/named': 'off',
      'import/namespace': 'off',
      'import/newline-after-import': 'warn',
      'import/no-absolute-path': 'error',
      // 'import/no-unused-modules': [
      //   'warn',
      //   {
      //     missingExports: true,
      //     unusedExports: true,
      //   },
      // ],
      'import/no-default-export': 'error',
      'import/no-named-as-default-member': 'off',
      'import/no-unresolved': 'off',
      'import/no-useless-path-segments': [
        'error',
        {
          noUselessIndex: true,
        },
      ],
    },
  },

  {
    files: ['*.vue', '*.test.ts'],
    rules: {
      'import/no-default-export': 'off',
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
      'import/no-default-export': 'off',
      'import/no-unused-modules': 'off',
    },
  },
  {
    settings: {
      'import/extensions': ['*.vue', '*.js', '*.ts', '*.mts', '*.mjs', '*.mtx'],
      'import/internal-regex': '^@/',
      'import/parsers': {
        '@typescript-eslint/parser': ['*.ts', '*.mts', '*.mtx'],
      },
      'import/resolver': {
        node: true,
        typescript: true,
      },
    },
  },
)
