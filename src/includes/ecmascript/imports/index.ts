import { defineConfig } from 'eslint/config'

import { relativeImports } from './relative-imports'

export const imports = defineConfig(relativeImports)
