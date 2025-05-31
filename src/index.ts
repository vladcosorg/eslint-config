import gitignore from 'eslint-config-flat-gitignore'
import { defineConfig, globalIgnores } from 'eslint/config'

import { ecmaScript } from './includes/ecmascript'
import { json } from './includes/json'
import { tailwind } from './includes/tailwind'

export async function config() {
  return defineConfig(
    gitignore(),
    globalIgnores([
      '.projen/**/*.*',
      '**/*.js',
      '**/*.d.ts',
      '**/package-lock.json',
      '**/node_modules/',
      '**/*.generated.ts',
      '**/coverage',
      '!**/.projenrc.ts',
      '!projenrc/**/*.ts',
    ]),
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
    ecmaScript,
    tailwind,
    await json(),
  )
}
