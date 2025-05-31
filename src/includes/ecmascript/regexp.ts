import { configs } from 'eslint-plugin-regexp'
import { defineConfig } from 'eslint/config'

import { GLOB_SRC } from '@antfu/eslint-config'

export const regexp = defineConfig({
  extends: [configs['flat/recommended']],
  files: [GLOB_SRC],
})
