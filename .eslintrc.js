module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    "jest/globals": true,
  },
  extends: 'airbnb',
  "parser": "babel-eslint",
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    "jest",
  ],
  rules: {
    "no-underscore-dangle": [0],
    "max-len": [0],
    "arrow-parens": [0],
    "react/destructuring-assignment": [0],
  },
  parser: "babel-eslint",
};
