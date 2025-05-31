// @ts-expect-error no type defs
import promisePlugin from 'eslint-plugin-promise'
import { defineConfig } from 'eslint/config'

import { GLOB_SRC } from '@antfu/eslint-config'
import { type ExtendsElement } from '@eslint/config-helpers'

export const promise = defineConfig({
  extends: [promisePlugin.configs['flat/recommended'] as ExtendsElement],
  files: [GLOB_SRC],
})
