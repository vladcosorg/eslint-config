import * as reactCompiler from 'eslint-plugin-react-compiler'
import { defineConfig } from 'eslint/config'

import { GLOB_JSX, GLOB_TSX } from '@antfu/eslint-config'

export const pluginReactCompiler = defineConfig({
  extends: [reactCompiler.configs.recommended],
  files: [GLOB_JSX, GLOB_TSX],
})
