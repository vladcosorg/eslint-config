import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'
import { defineConfig } from 'eslint/config'

import { GLOB_HTML, GLOB_TS, GLOB_TSX } from '@antfu/eslint-config'

export const tailwind = defineConfig({
  files: [GLOB_TSX, GLOB_TS, GLOB_HTML],
  plugins: {
    'better-tailwindcss': eslintPluginBetterTailwindcss,
  },

  rules: {
    ...eslintPluginBetterTailwindcss.configs['recommended']?.rules,
    'better-tailwindcss/enforce-consistent-variable-syntax': 'warn',
    'better-tailwindcss/enforce-shorthand-classes': 'warn',
  },
})
