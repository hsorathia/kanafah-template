module.exports = {
  plugins: ['@typescript-eslint', 'eslint-comments', 'jest', 'promise', 'unicorn'],
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jest/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    'no-prototype-builtins': 'off',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowExpressions: true, allowTypedFunctionExpressions: true },
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true, typedefs: true },
    ],
    'unicorn/prevent-abbreviations': 'off',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['.eslintrc.js'],
};
