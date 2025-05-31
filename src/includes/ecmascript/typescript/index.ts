import { defineConfig } from 'eslint/config'

import { deMorgan } from './de-morgan'
import { importXConfig } from './import-x'
import { promise } from './promise'
import { typescriptEslint } from './typescript-eslint'
import { unicorn } from './unicorn'

export const typescript = defineConfig(
  typescriptEslint,
  deMorgan,
  promise,
  importXConfig,
  unicorn,
)
