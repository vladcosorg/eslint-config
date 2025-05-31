import { defineConfig, globalIgnores } from 'eslint/config'

import { config } from './src'

export default defineConfig([
  globalIgnores([
    '**/*.js',
    '**/*.d.ts',
    '**/node_modules/',
    '**/*.generated.ts',
    '**/coverage',
    '!**/.projenrc.ts',
    '!projenrc/**/*.ts',
  ]),
  await config(),
])
