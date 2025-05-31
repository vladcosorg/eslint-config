import sonarPlugin from 'eslint-plugin-sonarjs'
import { defineConfig } from 'eslint/config'

import { GLOB_SRC } from '@antfu/eslint-config'

export const sonar = defineConfig({
  extends: [sonarPlugin.configs.recommended],
  files: [GLOB_SRC],
  rules: {
    // Perfrormance problems
    'sonarjs/deprecation': 'off',
    'sonarjs/no-commented-code': 'off',
  },
})
