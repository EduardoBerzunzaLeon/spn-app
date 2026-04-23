import pluginQuery from '@tanstack/eslint-plugin-query';
import mantine from 'eslint-config-mantine';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  ...mantine,
  ...pluginQuery.configs['flat/recommended'],
  {
    ignores: [
      '.drizzle/**',
      '.drizzle-sicon/**',
      '**/*.{mjs,cjs,js,d.ts,d.mts}',
      './.storybook/main.ts',
      'dist/**',
      'build/**',
      'node_modules',
      'backups',
      '**/seed.ts',
      '**/-ClientRoot.tsx',
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: process.cwd(),
      },
    },
    plugins: {
      prettier: prettierPlugin,
      'simple-import-sort': simpleImportSort,
      unicorn,
    },
    rules: {
      'prettier/prettier': 'error',
      'no-console': 'warn',
      'no-debugger': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      // unicorn
      'unicorn/prefer-node-protocol': 'error',
      'unicorn/prefer-ternary': 'error',
      'unicorn/no-useless-undefined': 'error',
      'unicorn/no-null': 'off', // en React usamos null
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            kebabCase: true,
            camelCase: true,
            pascalCase: true,
          },
        },
      ],
      'unicorn/consistent-function-scoping': 'error',
      'unicorn/prefer-export-from': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/consistent-type-imports': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['.*styles\\.css$'],
            ['^react-scan$', '^react$', '^next$', '^next/'],
            ['^node:'],
            ['^dayjs$', '^@?\\w'],
            ['^@mantine/', '^@mantinex/', '^@mantine-tests/'],
            ['^@docs/'],
            ['^@/'],
            ['^\\.\\.(?!.*\\.css$).*$'],
            ['^\\.(?!.*\\.css$).*$'],
            ['\\.css$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
  prettierConfig
);
