import sonarjs from 'eslint-plugin-sonarjs'
import { defineConfig } from 'eslint/config'

export const sonarConfig = defineConfig({
  extends: [sonarjs.configs.recommended],
  files: ['**/*.js', '**/*.ts', '**/*.mts', '**/*.mjs', '**/*.mtx', '**/*.tsx'],
})
