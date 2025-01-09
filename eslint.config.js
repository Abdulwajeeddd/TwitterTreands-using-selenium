import { ESLint } from 'eslint';

/** @type {ESLint.Options} */
const config = {
  files: ["**/*.js"], // Adjust this to your preferred file pattern
  languageOptions: {
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
  },
};

export default config;
