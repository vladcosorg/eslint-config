import relativeImportsPlugin from 'eslint-plugin-relative-imports-when-same-folder'
import { defineConfig } from 'eslint/config'

export const relativeImports = defineConfig({
  plugins: {
    'relative-imports-when-same-folder': relativeImportsPlugin,
  },
  rules: {
    'relative-imports-when-same-folder/no-relative-imports-when-same-folder':
      'error',
  },
})
