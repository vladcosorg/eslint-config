import { defineConfig } from 'eslint/config'

import { eslintConfig } from './includes/eslint'
import { importConfig } from './includes/import'
import { jsonConfig } from './includes/json'
import { perfectionistConfig } from './includes/perfectionist'
import { promiseConfig } from './includes/promise'
import { reactConfig } from './includes/react'
import { sonarConfig } from './includes/sonar'
import { tailwindConfig } from './includes/tailwind'
import { typescriptConfig } from './includes/typescript'
import { unicornConfig } from './includes/unicorn'
import { unusedImportsConfig } from './includes/unused-imports'

export const vladcosEslintConfig = defineConfig(
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  unicornConfig,
  eslintConfig,
  promiseConfig,
  jsonConfig,
  typescriptConfig,
  importConfig,
  sonarConfig,
  reactConfig,
  tailwindConfig,
  unusedImportsConfig,
  perfectionistConfig,
)
