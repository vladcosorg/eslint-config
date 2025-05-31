import eslintPluginReadableTailwind from 'eslint-plugin-readable-tailwind'
import tailwindPlugin from 'eslint-plugin-tailwindcss'
import { defineConfig } from 'eslint/config'

import { GLOB_HTML, GLOB_TS, GLOB_TSX } from '@antfu/eslint-config'

export const tailwind = defineConfig({
  extends: [tailwindPlugin.configs['flat/recommended']],
  files: [GLOB_TSX, GLOB_TS, GLOB_HTML],
  plugins: {
    'readable-tailwind': eslintPluginReadableTailwind,
  },

  rules: {
    'tailwindcss/no-custom-classname': 'off',
    ...eslintPluginReadableTailwind.configs.warning.rules,
    ...eslintPluginReadableTailwind.configs.error.rules,
  },
  settings: {
    tailwindcss: {
      // These are the default values but feel free to customize
      callees: ['classnames', 'clsx', 'ctl', 'tw', 'tv', 'twMerge'],
      cssFiles: [],
    },
  },
})
