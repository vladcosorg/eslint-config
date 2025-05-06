import perfectionist from 'eslint-plugin-perfectionist'
import { defineConfig } from 'eslint/config'

const config = perfectionist.configs['recommended-natural']

export const perfectionistConfig = defineConfig({
  extends: [config],
  files: ['**/*.js', '**/*.ts', '**/*.mts', '**/*.mjs', '**/*.mtx', '**/*.tsx'],
  rules: {
    'perfectionist/sort-imports': [
      'error',
      {
        internalPattern: ['^@.+'],
      },
    ],
  },
})
