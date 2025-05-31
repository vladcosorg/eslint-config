import reactPlugin from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'

import { GLOB_TSX } from '@antfu/eslint-config'
import { type ConfigWithExtends } from '@eslint/config-helpers'

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
  reactPlugin.configs.flat['jsx-runtime'] as ConfigWithExtends,
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
