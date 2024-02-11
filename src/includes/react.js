// @ts-check
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  overrides: [
    {
      files: ['*.{js,jsx,mjs,cjs,ts,tsx}'],
      extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'canonical/react',
      ],
      // rules: {
      //   'boolean-prop-naming': 'warning',
      //   'button-has-type': 'warning',
      //   'destructuring-assignment': 'warning',
      //   'react/function-component-definition': 'warning',
      //   'react/jsx-boolean-value': 'warning',
      //   'react/jsx-handler-names': 'warning',
      //   'react/jsx-equals-spacing': 'warning',
      //   'react/jsx-curly-spacing': 'warning',
      //   'react/jsx-curly-brace-presence': 'warning',
      // },
    },
  ],
})
