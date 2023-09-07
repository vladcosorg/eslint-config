import { TypeScriptProject } from '@vladcos/projen-base'

const deps = [
  'eslint',
  '@typescript-eslint/eslint-plugin',
  '@typescript-eslint/parser',
  // 'eslint-config-canonical',
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
]
const project = new (class extends TypeScriptProject {
  override preSynthesize() {
    super.preSynthesize()
    this.eslint._extends = this.eslint._extends.filter(
      (item: string) => item !== this.name,
    )
  }
})({
  defaultReleaseBranch: 'main',
  devDeps: ['@vladcos/projen-base'],
  name: '@vladcos/eslint-config',
  projenrcTs: true,
  packemon: false,
  peerDependencyOptions: {
    pinnedDevDependency: false,
  },
  deps,
})
// @ts-expect-error We have to edit the private var
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access

project.eslint.addExtends('./src/index.js')
project.compileTask.reset(`cp -R src  ${project.libdir}`)
project.synth()
