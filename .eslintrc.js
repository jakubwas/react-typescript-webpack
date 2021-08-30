module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'no-console': 1,
    'no-inline-comments': 'warn',
    'no-empty-function': 'off',
    'no-param-reassign': 'off',
    'react/prop-types': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  ignorePatterns: ['*.html'],
  extends: ['plugin:import/recommended'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@components', './src/components']],
        extensions: ['.jsx', '.js', '.json'],
      },
    },
  },
};
