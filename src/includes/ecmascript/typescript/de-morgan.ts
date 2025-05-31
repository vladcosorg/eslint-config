import deMorgatPlugin from 'eslint-plugin-de-morgan'
import { defineConfig } from 'eslint/config'

import { GLOB_SRC } from '@antfu/eslint-config'

export const deMorgan = defineConfig({
  extends: [deMorgatPlugin.configs.recommended],
  files: [GLOB_SRC],
})
