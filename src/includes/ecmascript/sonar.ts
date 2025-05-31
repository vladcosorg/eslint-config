import sonarPlugin from 'eslint-plugin-sonarjs'
import { defineConfig } from 'eslint/config'

import { GLOB_SRC, GLOB_TSX } from '@antfu/eslint-config'

export const sonar = defineConfig(
  {
    extends: [sonarPlugin.configs.recommended],
    files: [GLOB_SRC],
    rules: {
      // Perfrormance problems
      'sonarjs/deprecation': 'off',
      'sonarjs/no-commented-code': 'off',
    },
  },
  {
    files: [GLOB_TSX],
    rules: {
      'sonarjs/prefer-read-only-props': 'off',
    },
  },
)
