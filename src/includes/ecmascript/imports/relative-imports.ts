import relativeImportsPlugin from 'eslint-plugin-relative-imports-when-same-folder'
import { defineConfig } from 'eslint/config'

import { GLOB_SRC, GLOB_SRC_EXT } from '@antfu/eslint-config'

export const relativeImports = defineConfig(
  {
    files: [GLOB_SRC],
    plugins: {
      'relative-imports-when-same-folder': relativeImportsPlugin,
    },
    rules: {
      'relative-imports-when-same-folder/no-relative-imports-when-same-folder':
        'error',
    },
  },
  {
    files: [`./*.${GLOB_SRC_EXT}`],
    rules: {
      'relative-imports-when-same-folder/no-relative-imports-when-same-folder':
        'off',
    },
  },
)
