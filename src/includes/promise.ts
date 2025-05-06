// @ts-expect-error no type defs
import promisePlugin from 'eslint-plugin-promise'
import { defineConfig } from 'eslint/config'

import { type ConfigWithExtendsArray } from '@eslint/config-helpers'

export const promiseConfig = defineConfig(
   
  promisePlugin.configs['flat/recommended'] as ConfigWithExtendsArray,
)
