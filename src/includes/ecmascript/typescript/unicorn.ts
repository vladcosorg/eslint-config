import unicornPlugin from 'eslint-plugin-unicorn'
import { defineConfig } from 'eslint/config'

import { GLOB_SRC, GLOB_SRC_EXT, GLOB_TSX } from '@antfu/eslint-config'

export const unicorn = defineConfig(
  {
    extends: [unicornPlugin.configs.recommended],
    files: [GLOB_SRC],
    rules: {
      'unicorn/no-null': 'off',
      'unicorn/prefer-at': 'warn',
    },
  },
  {
    files: [GLOB_TSX, `**/use-*.${GLOB_SRC_EXT}`],
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
