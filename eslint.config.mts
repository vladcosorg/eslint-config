import { defineConfig } from 'eslint/config'

import { config } from './src'

export default defineConfig([await config()])
