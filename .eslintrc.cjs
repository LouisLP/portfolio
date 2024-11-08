module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', '@vue/eslint-config-typescript'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2021,
  },
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'index',
          'object',
          'type',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
          },
          {
            pattern: 'vue',
            group: 'external',
            position: 'before',
          },
        ],
      },
    ],
  },
}
