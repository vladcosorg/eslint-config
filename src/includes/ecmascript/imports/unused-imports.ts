import unusedImportsPlugin from 'eslint-plugin-unused-imports'
import { defineConfig } from 'eslint/config'

import { GLOB_SRC } from '@antfu/eslint-config'

export const unusedImports = defineConfig({
  files: [GLOB_SRC],
  plugins: {
    'unused-imports': unusedImportsPlugin,
  },
  rules: {
    'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
  },
})
