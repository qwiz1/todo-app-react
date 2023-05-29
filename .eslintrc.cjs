module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', '@tanstack/query'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'no-var': 'error',
    'no-console': 'warn',
    'arrow-parens': ['error', 'always'],
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        'vars': 'all',
        'args': 'after-used',
        'argsIgnorePattern': '^_',
        'caughtErrors': 'all',
      },
    ],
    '@typescript-eslint/no-empty-interface': [
      'error',
      { 'allowSingleExtends': true },
    ],
    'jsx-quotes': ['error', 'prefer-double'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
