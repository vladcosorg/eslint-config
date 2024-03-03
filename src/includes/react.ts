// @ts-check
import { defineConfig } from 'eslint-define-config'

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
      plugins: ['react-refresh'],
      rules: {
        //   'boolean-prop-naming': 'warning',
        //   'button-has-type': 'warning',
        //   'destructuring-assignment': 'warning',
        //   'react/function-component-definition': 'warning',
        //   'react/jsx-boolean-value': 'warning',
        //   'react/jsx-handler-names': 'warning',
        //   'react/jsx-equals-spacing': 'warning',
        //   'react/jsx-curly-spacing': 'warning',
        //   'react/jsx-curly-brace-presence': 'warning',
        'react/prop-types': 0,
        'react/forbid-component-props': 0,
        'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true },
        ],
        'react/function-component-definition': [
          'warn',
          {
            namedComponents: 'function-declaration',
            unnamedComponents: 'arrow-function',
          },
        ],
      },
    },
  ],
})
