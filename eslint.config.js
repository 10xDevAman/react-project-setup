//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'

export default [
  ...tanstackConfig,
  {
    rules: {
      'import/no-cycle': 'off',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['pattern', 'sibling'],
            'index',
            'object',
            'type',
          ],

          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensition: true
          },
        },
      ],
      'sort-imports': 'off',
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/require-await': 'off',
      'pnpm/json-enforce-catalog': 'off',

      'no-undef': ['warn'],
    },
  },
  {
    ignores: [
      'eslint.config.js',
      'prettier.config.js',
      'commitlint.config.js',
      '.output/*',
      '*/components/ui/*',
      'src/routeTree.gen.ts',
    ],
  },
]
