import deMorgatPlugin from 'eslint-plugin-de-morgan'
import { defineConfig } from 'eslint/config'

import { GLOB_TS, GLOB_TSX } from '../../../const'

export const deMorgan = defineConfig({
  extends: [deMorgatPlugin.configs.recommended],
  files: [GLOB_TS, GLOB_TSX],
})
