// @ts-check
import { defineConfig } from 'eslint-define-config'

module.exports = defineConfig({
  overrides: [
    {
      files: ['*.tsx'],
      extends: [
        'plugin:readable-tailwind/warning',
        'plugin:tailwindcss/recommended',
      ],
      plugins: ['readable-tailwind'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
      },
      rules: {
        'tailwindcss/no-custom-classname': 'off',
      },
      settings: {
        tailwindcss: {
          // These are the default values but feel free to customize
          callees: ['classnames', 'clsx', 'ctl', 'tw', 'tv', 'twMerge'],
          cssFiles: [],
        },
      },
    },
  ],
})
