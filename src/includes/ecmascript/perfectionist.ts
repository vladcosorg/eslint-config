import perfectionistPlugin from 'eslint-plugin-perfectionist'
import { defineConfig } from 'eslint/config'

import { GLOB_SRC } from '@antfu/eslint-config'

const config = perfectionistPlugin.configs['recommended-natural']

export const perfectionist = defineConfig({
  extends: [config],
  files: [GLOB_SRC],
  rules: {
    '@typescript-eslint/sort-type-constituent': 'off',
    'perfectionist/sort-imports': [
      'error',
      {
        internalPattern: ['^@.+'],
      },
    ],
  },
})
