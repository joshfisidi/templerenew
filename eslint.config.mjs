import nextPlugin from '@next/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import globals from 'globals'

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@next/next': nextPlugin,
    },
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    settings: {
      next: {
        rootDir: '.',
      },
    },
    extends: [
      'next/core-web-vitals',
    ],
    rules: {
      '@next/next/no-html-link-for-pages': 'error',
    },
  },
]