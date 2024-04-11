module.exports = {
  extends: [
    'airbnb-base',
    'plugin:import/recommended',
  ],
  rules: {
    'import/no-commonjs': 'error',
  },
  overrides: [
    {
      files: ['.eslintrc.js'],
      rules: {
        'import/no-commonjs': 0,
      },
    },
    {
      files: ['tests/**/*'],
      plugins: ['jest'],
      env: {
        'jest/globals': true,
      },
    },
  ],
};
