const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  overrides: [
    {
      files: ['*.js', '*.ts'],
      extends: ['plugin:node/recommended'],
      rules: {
        'node/no-callback-literal': 'error',
        'node/handle-callback-err': 'error',
        'node/no-new-require': 'error',
        'node/no-path-concat': 'error',
        'node/no-process-exit': 'error',
        'node/callback-return': 'error',
        'node/exports-style': 'error',
        'node/global-require': 'error',
        'node/no-mixed-requires': 'error',
        'node/no-sync': 'error',
        'node/prefer-promises/fs': 'error',
        'node/no-unpublished-import': 'off',
      },
    },
  ],
})
