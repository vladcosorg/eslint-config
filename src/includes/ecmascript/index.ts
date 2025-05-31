import { defineConfig } from 'eslint/config'

import { imports } from './imports'
import { javascript } from './javascript'
import { perfectionist } from './perfectionist'
import { react } from './react'
import { regexp } from './regexp'
import { sonar } from './sonar'
import { typescript } from './typescript'

export const ecmaScript = defineConfig(
  javascript,
  typescript,
  imports,
  react,
  perfectionist,
  regexp,
  sonar,
)
