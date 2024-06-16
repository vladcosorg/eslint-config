module.exports = {
  // extends: ['plugin:canonical/recommended', 'canonical/prettier'],
  // extends: ['canonical', 'canonical/prettier'],
  // rules: {/**/
  //   'canonical/filename-match-exported': 'off',
  // },
  plugins: ['canonical'],
  overrides: [
    {
      rules: {
        // 'virtual-module': 'warn',
        'canonical/prefer-import-alias': [
          'warn',
          {
            aliases: [
              {
                alias: '@routes/',
                matchPath: String.raw`@routes\/`,
                maxRelativeDepth: 1,
              },
            ],
          },
        ],
      },
      files: '*.ts',
    },
  ],
}
