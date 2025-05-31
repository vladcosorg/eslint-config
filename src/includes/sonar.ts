import sonarPlugin from 'eslint-plugin-sonarjs'
import { defineConfig } from 'eslint/config'

import { GLOB_JS, GLOB_JSX, GLOB_TS, GLOB_TSX } from '../const'

export const sonar = defineConfig({
  extends: [sonarPlugin.configs.recommended],
  files: [GLOB_JS, GLOB_JSX, GLOB_TS, GLOB_TSX],
  rules: {
    // Perfrormance problems
    'sonarjs/deprecation': 'off',
    'sonarjs/no-commented-code': 'off',
  },
})
