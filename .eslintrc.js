module.exports = {
  // React ESLint Settings
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
  },
  // Set up ESLint for .ts / .tsx files
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      extends: [
        'airbnb-typescript',
      ],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        'react/function-component-definition': [2, {
          namedComponents: 'function-declaration',
          unnamedComponents: 'arrow-function',
        }],
      },
      overrides: [
        {
          files: ['**/*.slice.ts'],
          rules: {
            'no-param-reassign': 0,
          },
        }],
    },
  ],
};
