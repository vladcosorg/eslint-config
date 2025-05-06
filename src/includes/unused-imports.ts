import unusedImports from 'eslint-plugin-unused-imports'
import { defineConfig } from 'eslint/config'

export const unusedImportsConfig = defineConfig({
  files: ['**/*.ts', '**/*.tsx', '*.js?', '*.vue'],
  plugins: { 'unused-imports': unusedImports },
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
  },
})
