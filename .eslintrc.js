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
    'vue/attributes-order': 'off'
  }
}
