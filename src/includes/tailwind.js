// @ts-check
const { defineConfig } = require('eslint-define-config')

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
    },
  ],
})
