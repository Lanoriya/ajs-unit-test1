module.exports = {
    env: {
      node: true,
      es6: true,
      jest: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:jest/recommended',
    ],
    parserOptions: {
      ecmaVersion: 2020,
    },
    rules: {
    },
    plugins: [
      'jest',
    ],
  };
  