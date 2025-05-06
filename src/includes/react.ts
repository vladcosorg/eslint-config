import { react } from 'eslint-config-canonical'
import reactPlugin from 'eslint-plugin-react'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig } from 'eslint/config'

import { type ExtendsElement } from '@eslint/config-helpers'

export const reactConfig = defineConfig({
  extends: [
    reactRefresh.configs.recommended,
    reactPlugin.configs.flat['recommended'] as ExtendsElement,
    reactPlugin.configs.flat['jsx-runtime'] as ExtendsElement,
    react.recommended as ExtendsElement,
  ],
  files: ['**/*.{jsx,tsx}'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/forbid-component-props': 0,
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
})
