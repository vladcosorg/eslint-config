import eslintPluginReadableTailwind from 'eslint-plugin-readable-tailwind'
import tailwind from 'eslint-plugin-tailwindcss'
import { defineConfig } from 'eslint/config'

export const tailwindConfig = defineConfig({
  extends: [tailwind.configs['flat/recommended']],
  files: ['*.tsx'],
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
