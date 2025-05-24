import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: {
      parser: tseslint.parser,
      globals: globals.browser,
    },
    plugins: {
      js
    },
    rules: {
      // Disallow var
      'no-var': 'error',
      // Disallow unused variables
      'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
      // Disallow multiple empty lines
      'no-multiple-empty-lines': ['error', { max: 0, maxEOF: 0 }],
      // Enforce 2-space indentation
      indent: ['error', 2],
      // Require semicolons
      semi: ['error', 'always'],
      // Enforce single quotes
      quotes: ['error', 'single'],
      // Enforce "use strict" directive
      strict: ['error', 'global'],
      // Disallow console.log statement
      'no-console': 'error',
    },
  },
  // Use CommonJS for *.js files
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
]);
