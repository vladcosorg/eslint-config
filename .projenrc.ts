import { TypeScriptProject } from '@vladcos/projen-base'

const deps = [
  'eslint@^9',
  '@typescript-eslint/eslint-plugin@^8',
  '@typescript-eslint/parser@^8',
  'eslint-config-prettier',
  'eslint-define-config',
  'eslint-import-resolver-alias',
  'eslint-import-resolver-typescript',
  'eslint-plugin-import',
  'eslint-plugin-jest',
  'eslint-plugin-json-schema-validator',
  'eslint-plugin-jsonc',
  'eslint-plugin-json-files',
  // 'eslint-plugin-node',
  'eslint-plugin-promise',
  'eslint-plugin-sonarjs@3',
  'eslint-plugin-unicorn',
  'eslint-plugin-unused-imports',
  'eslint-plugin-vue',
  'eslint-plugin-react',
  'eslint-plugin-react-hooks',
  'eslint-plugin-react-refresh',
  'eslint-plugin-tailwindcss',
  'eslint-define-config',
  'eslint-plugin-tailwindcss',
  '@rushstack/eslint-patch',
  'eslint-config-canonical',
  'eslint-plugin-readable-tailwind',
  'eslint-plugin-simple-import-sort',
]
const project = new (class extends TypeScriptProject {
  override preSynthesize() {
    super.preSynthesize()
    this.eslint._extends?.delete(this.name)
  }
})({
  defaultReleaseBranch: 'main',
  devDeps: ['@vladcos/projen-base'],
  name: '@vladcos/eslint-config',
  projenrcTs: true,
  packemon: false,
  projenDevDependency: false,
  disableTsconfig: false,
  disableTsconfigDev: false,
  tsconfigDevFile: 'tsconfig.dev.json',
  peerDependencyOptions: {
    pinnedDevDependency: false,
  },
  deps,
  repository: 'https://github.com/vladcosorg/eslint-config',
})
// @ts-expect-error We have to edit the private var
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
project.eslint.addExtends('./lib/index.js')
// project.compileTask.reset(`cp -R src  ${project.libdir}`)
project.synth()
