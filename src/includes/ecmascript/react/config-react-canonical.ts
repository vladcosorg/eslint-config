import { react as reactCanonical } from 'eslint-config-canonical'
import { defineConfig } from 'eslint/config'

import { type ConfigWithExtendsArray } from '@eslint/config-helpers'

export const configReactCanonical = defineConfig(
  reactCanonical.recommended as ConfigWithExtendsArray,
)
