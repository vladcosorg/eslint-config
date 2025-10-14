import { TypeScriptModuleResolution } from 'projen/lib/javascript/typescript-config'

import { TypeScriptProject } from '@vladcos/projen-base'

const deps = [
  'eslint@^9',
  '@typescript-eslint/eslint-plugin@^8',
  '@typescript-eslint/parser@^8',
  '@eslint/js',
  'globals',
  '@eslint/compat',
  '@eslint/eslintrc',
  '@eslint/json',
  'eslint-config-prettier',
  'eslint-define-config',
  'eslint-import-resolver-alias',
  'eslint-plugin-perfectionist',
  'eslint-import-resolver-typescript@^4',
  'eslint-plugin-jest',
  'eslint-plugin-json-schema-validator',
  'eslint-plugin-jsonc',
  'eslint-plugin-json-files',
  'eslint-plugin-promise',
  'eslint-plugin-sonarjs@^3',
  'eslint-plugin-unicorn@^61',
  'eslint-plugin-unused-imports',
  'eslint-plugin-vue',
  'eslint-plugin-react',
  'eslint-plugin-react-hooks',
  'eslint-plugin-react-refresh',
  'eslint-plugin-tailwindcss',
  'eslint-define-config',
  'eslint-plugin-tailwindcss',
  'eslint-config-canonical',
  'eslint-plugin-readable-tailwind',
  'eslint-plugin-simple-import-sort',
  '@types/eslint-plugin-tailwindcss',
  'eslint-plugin-de-morgan',
  '@antfu/eslint-config',
  'eslint-plugin-react-compiler',
  '@eslint-react/eslint-plugin',
  'eslint-plugin-import-x',
  'eslint-plugin-relative-imports-when-same-folder',
  'eslint-plugin-no-relative-import-paths',
  'eslint-plugin-regexp',
]
const project = new (class extends TypeScriptProject {
  override preSynthesize() {
    super.preSynthesize()
    this.eslint._extends?.delete(this.name)
  }
})({
  defaultReleaseBranch: 'main',
  deps,
  devDeps: ['@vladcos/projen-base', 'jiti', 'rolldown'],
  disableTsconfig: false,
  disableTsconfigDev: false,
  eslintOptions: { fileExtensions: [] },
  name: '@vladcos/eslint-config',
  packemon: false,
  peerDependencyOptions: {
    pinnedDevDependency: false,
  },
  projenDevDependency: false,
  projenrcTs: true,

  repository: 'https://github.com/vladcosorg/eslint-config',
  tsconfig: {
    compilerOptions: {
      module: 'nodenext',
      moduleResolution: TypeScriptModuleResolution.NODE16,
    },
    fileName: 'tsconfig.prod.json',
  },
  tsconfigDev: {
    compilerOptions: {
      module: 'ES6',
      moduleResolution: TypeScriptModuleResolution.BUNDLER,
    },
    fileName: 'tsconfig.json',
    include: ['**/*.ts', '**/*.mts', '**/*.cts', '**/*.json', '**/*.js'],
  },
})
// @ts-expect-error We have to edit the private var

project.eslint.addExtends('./lib/index.js')
// project.eslint._lintPatterns = new Set()

project.eslint?.addLintPattern('*')
// project.eslint.updateTask()
// project.compileTask.reset(`cp -R src  ${project.libdir}`)
project.eslint?.eslintTask.reset('eslint', {
  args: [
    '--no-warn-ignored',
    ...project.files.map((file) => `--ignore-pattern ${file.path}`),
  ],
  env: {
    ESLINT_USE_FLAT_CONFIG: 'true',
  },
})
project.synth()
