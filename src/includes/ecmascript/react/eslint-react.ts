import { defineConfig } from 'eslint/config'

import { GLOB_JSX, GLOB_TSX } from '@antfu/eslint-config'
import react from '@eslint-react/eslint-plugin'
import { type ExtendsElement } from '@eslint/config-helpers'

export const eslintReact = defineConfig({
  extends: [react.configs.all as unknown as ExtendsElement],
  files: [GLOB_JSX, GLOB_TSX],
  rules: {},
  settings: {
    'react-x': {
      version: '19.2.0',
    },
  },
})
