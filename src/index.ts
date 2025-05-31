import { defineConfig } from 'eslint/config'

import { ecmaScript } from './includes/ecmascript'
import { json } from './includes/json'
import { tailwind } from './includes/tailwind'
import { unusedImportsConfig } from './includes/unused-imports'

export async function config() {
  return defineConfig(
    {
      languageOptions: {
        ecmaVersion: 'latest',
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          projectService: true,
        },
        sourceType: 'module',
      },
    },
    // sonar,
    ecmaScript,
    tailwind,
    unusedImportsConfig,
    await json(),
  )
}
