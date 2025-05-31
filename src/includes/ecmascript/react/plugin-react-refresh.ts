import reactRefreshPlugin from 'eslint-plugin-react-refresh'
import { defineConfig } from 'eslint/config'

import { GLOB_JSX } from '@antfu/eslint-config'

export const pluginReactRefresh = defineConfig({
  extends: [reactRefreshPlugin.configs.recommended],
  files: [GLOB_JSX],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
})
