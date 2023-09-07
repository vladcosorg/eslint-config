import { TypeScriptProject } from '@vladcos/projen-base'

const deps = [
  'eslint@^8',
  '@typescript-eslint/eslint-plugin@^6',
  '@typescript-eslint/parser@^6',
  // 'eslint-config-canonical',
  'eslint-config-prettier@^9',
  'eslint-define-config@^1',
  'eslint-import-resolver-alias@^1',
  'eslint-import-resolver-typescript@^3',
  'eslint-plugin-import@^2',
  'eslint-plugin-jest@^27',
  'eslint-plugin-json-schema-validator@^4',
  'eslint-plugin-jsonc@^2',
  'eslint-plugin-json-files@^3',
  'eslint-plugin-node@^11',
  'eslint-plugin-promise@^6',
  'eslint-plugin-sonarjs@latest',
  'eslint-plugin-unicorn@^48',
  'eslint-plugin-unused-imports@^3',
  'eslint-plugin-vue@^9',
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
