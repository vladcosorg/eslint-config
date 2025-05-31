import reactPlugin from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'

import { GLOB_JSX, GLOB_TSX } from '@antfu/eslint-config'
import { type ExtendsElement } from '@eslint/config-helpers'

export const pluginReact = defineConfig({
  extends: [
    reactPlugin.configs.flat['recommended'] as ExtendsElement,
    reactPlugin.configs.flat['jsx-runtime'] as ExtendsElement,
  ],
  files: [GLOB_JSX, GLOB_TSX],
  rules: {
    'react/boolean-prop-naming': 1,
    'react/forbid-component-props': 0,
    'react/forward-ref-uses-ref': 1,
    'react/hook-use-state': 1,
    'react/jsx-no-literals': [
      2,
      {
        allowedStrings: ['allowed'],
        ignoreProps: false,
        noAttributeStrings: true,
        noStrings: true,
      },
    ],
    'react/jsx-no-useless-fragment': 2,
    'react/jsx-wrap-multilines': 1,
    'react/prefer-read-only-props': 2,
  },
})
