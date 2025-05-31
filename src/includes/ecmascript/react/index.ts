import { defineConfig } from 'eslint/config'

import { GLOB_TSX } from '@antfu/eslint-config'

import { configReactCanonical } from './config-react-canonical'
import { eslintReact } from './eslint-react'
import { pluginReact } from './plugin-react'
import { pluginReactCompiler } from './plugin-react-compiler'
import { pluginReactRefresh } from './plugin-react-refresh'

export const react = defineConfig(
  pluginReact,
  pluginReactRefresh,
  pluginReactCompiler,
  eslintReact,
  configReactCanonical,
  {
    files: [GLOB_TSX],
    rules: {
      'react/function-component-definition': [
        'warn',
        {
          namedComponents: 'function-declaration',
          unnamedComponents: 'arrow-function',
        },
      ],
    },
  },
)
