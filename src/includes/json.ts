import { type Linter } from 'eslint'
import eslintPluginJsonc from 'eslint-plugin-jsonc'
import { defineConfig } from 'eslint/config'

import { jsonc, sortPackageJson, sortTsconfig } from '@antfu/eslint-config'
import eslintJson from '@eslint/json'

import { GLOB_JSON } from '../const'

const jsonPlugin = eslintPluginJsonc.configs[
  'flat/recommended-with-json'
] as Linter.Config

export const json = async function () {
  return defineConfig(
    {
      extends: [
        jsonPlugin,
        eslintJson.configs.recommended,
        // eslintPluginJsonSchemaValidator.configs['flat/recommended'],
      ],
      files: [GLOB_JSON],
      language: 'json/json',
      rules: {
        'json/no-duplicate-keys': 'error',
      },
    },
    await jsonc(),
    sortTsconfig(),
    await sortPackageJson(),
  )
}
