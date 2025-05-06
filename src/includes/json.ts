import { type Linter } from 'eslint'
import eslintPluginJsonc from 'eslint-plugin-jsonc'
import { defineConfig } from 'eslint/config'

const jsonPlugin = eslintPluginJsonc.configs[
  'flat/recommended-with-json'
] as Linter.Config
import json from '@eslint/json'

export const jsonConfig = defineConfig({
  extends: [
    jsonPlugin,
    // eslintPluginJsonSchemaValidator.configs['flat/recommended'],
  ],
  files: ['*.json'],
  language: 'json/json',
  plugins: {
    json,
  },
  rules: {
    'json/no-duplicate-keys': 'error',
  },
})
