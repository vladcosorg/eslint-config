import { CustomTypescriptProject } from '@chetzof/projen-base'
const project = new CustomTypescriptProject({
  defaultReleaseBranch: 'main',
  devDeps: ['@chetzof/projen-base'],
  name: '@vladcos/eslint-config',
  projenrcTs: true,
  peerDeps: [
    'eslint',
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint/parser',
    'eslint-config-canonical',
    'eslint-config-prettier',
    'eslint-define-config',
    'eslint-import-resolver-alias',
    'eslint-import-resolver-typescript',
    'eslint-plugin-import',
    'eslint-plugin-jest',
    'eslint-plugin-json-schema-validator',
    'eslint-plugin-jsonc',
    'eslint-plugin-json-files',
    'eslint-plugin-node',
    'eslint-plugin-promise',
    'eslint-plugin-sonarjs',
    'eslint-plugin-unicorn',
    'eslint-plugin-unused-imports',
    'eslint-plugin-vue',
    'prettier',
  ],
})
project.compileTask.reset(`cp -R src  ${project.libdir}`)

project.synth()
