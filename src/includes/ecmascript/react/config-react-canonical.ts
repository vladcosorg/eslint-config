import { react as reactCanonical } from 'eslint-config-canonical'
import { defineConfig } from 'eslint/config'

import { GLOB_SRC_EXT } from '@antfu/eslint-config'
import { type ConfigWithExtendsArray } from '@eslint/config-helpers'

export const configReactCanonical = defineConfig({
  extends: [reactCanonical.recommended as ConfigWithExtendsArray],
  files: [GLOB_SRC_EXT],
})
