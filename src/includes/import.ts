module.exports = {
  overrides: [
    {
      files: ['*.vue', '*.js', '*.ts', '*.mts', '*.mjs', '*.mtx', '*.tsx'],
      extends: ['plugin:import/recommended', 'plugin:import/typescript'],
      plugins: ['import', 'simple-import-sort'],
      rules: {
        // 'simple-import-sort/imports': 'error',
        // 'simple-import-sort/exports': 'error',
        // disable for performance reasosn
        'import/named': 'off',
        'import/namespace': 'off',
        'import/default': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        // 'import/no-unused-modules': [
        //   'warn',
        //   {
        //     missingExports: true,
        //     unusedExports: true,
        //   },
        // ],
        'import/no-default-export': 'error',
        'import/dynamic-import-chunkname': [
          'warn',
          {
            webpackChunknameFormat: '[a-zA-Z0-57-9-/_]+',
          },
        ],
        // 'import/extensions': [
        //   'warn',
        //   'always',
        //   { js: 'never', ts: 'never', vue: 'always' },
        // ],
        'import/newline-after-import': 'warn',
        'import/order': [
          'warn',
          {
            alphabetize: { order: 'asc' },
            groups: [
              'builtin',
              'external',
              'internal',
              'sibling',
              'parent',
              'index',
              'object',
              'type',
            ],
            'newlines-between': 'always',
            pathGroups: [
              {
                group: 'internal',
                pattern: '@/**',
              },
              {
                group: 'internal',
                pattern: '@*/**',
              },
            ],
          },
        ],
      },
    },
    {
      files: ['*.vue', '*.test.ts'],
      rules: {
        'import/no-default-export': 'off',
        // 'import/no-unused-modules': [
        //   'error',
        //   {
        //     missingExports: false,
        //     unusedExports: true,
        //   },
        // ],
      },
    },
    {
      files: [
        'vite.*.*',
        'vitest.*.*',
        'playwright.*.*',
        'eslint.*.*',
        'src/index.ts',
        'src/index.js',
        '.projenrc.*',
      ],
      rules: {
        'import/no-default-export': 'off',
        'import/no-unused-modules': 'off',
      },
    },
  ],
  settings: {
    'import/extensions': ['*.vue', '*.js', '*.ts', '*.mts', '*.mjs', '*.mtx'],
    'import/internal-regex': '^@/',
    'import/resolver': {
      typescript: true,
      node: true,
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['*.ts', '*.mts', '*.mtx'],
    },
  },
}
