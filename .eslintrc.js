// http://eslint.org/docs/user-guide/configuring

module.exports = {
  env: {
    jest: true,
  },
  extends: [
    'vulmajs',
  ],
  rules: {
    // disable now, but enable in the future
    'vue/attributes-order': 'off',
    "semi": 'off',
    'max-len': ['error', {
      'code': 120,
      'tabWidth': 4,
      'ignoreUrls': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
      'ignoreRegExpLiterals': true
    }]
  }
}
