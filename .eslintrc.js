module.exports = {
  extends: [
    'standard'
  ],
  overrides: [
    {
      files: ['tests/**/*'],
      plugins: ['jest'],
      env: {
        'jest/globals': true
      }
    }
  ]
}
