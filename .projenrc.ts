import { CustomTypescriptProject } from '@chetzof/projen-base'

const project = new CustomTypescriptProject({
  defaultReleaseBranch: 'main',
  devDeps: ['@chetzof/projen-base'],
  name: '@vladcos/eslint-config',
  projenrcTs: true,
  peerDependencyOptions: {
    pinnedDevDependency: false,
  },
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
// @ts-expect-error We have to edit the private var
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
project.eslint._extends = project.eslint._extends.filter(
  (item: string) => item !== project.name,
)
project.eslint.addExtends('./src/index.js')
project.package.addField('main', '')
project.compileTask.reset(`cp -R src  ${project.libdir}`)
project.synth()
