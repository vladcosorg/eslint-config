import { defineConfig } from 'eslint/config'

import { GLOB_JSX, GLOB_TSX } from '@antfu/eslint-config'
import react from '@eslint-react/eslint-plugin'
import { type ExtendsElement } from '@eslint/config-helpers'

export const eslintReact = defineConfig({
  extends: [
    react.configs['recommended-type-checked'] as unknown as ExtendsElement,
  ],
  files: [GLOB_JSX, GLOB_TSX],
  rules: {
    '@eslint-react/no-children-prop': 2,
    '@eslint-react/no-complex-conditional-rendering': 2,
    '@eslint-react/no-useless-fragment': 2,
    '@eslint-react/prefer-destructuring-assignment': 1,
    '@eslint-react/prefer-read-only-props': 2,
    '@eslint-react/prefer-shorthand-boolean': 2,
    '@eslint-react/prefer-shorthand-fragment': 2,
  },
  settings: {
    'react-x': {
      version: '18.3.1',
    },
  },
})
