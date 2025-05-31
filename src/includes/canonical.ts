module.exports = {
  overrides: [
    {
      files: '*.ts',
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
    },
  ],
  // extends: ['plugin:canonical/recommended', 'canonical/prettier'],
  // extends: ['canonical', 'canonical/prettier'],
  // rules: {/**/
  //   'canonical/filename-match-exported': 'off',
  // },
  plugins: ['canonical'],
}
