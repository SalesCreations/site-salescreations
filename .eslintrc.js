module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  'no-use-before-define': [
    'error',
    {
      functions: true,
      classes: true,
      variables: true,
      allowNamedExports: false,
    },
  ],
}
