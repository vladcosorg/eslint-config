import { defineConfig } from 'eslint/config'

import { relativeImports } from './relative-imports'
import { unusedImports } from './unused-imports'

export const imports = defineConfig(relativeImports, unusedImports)
