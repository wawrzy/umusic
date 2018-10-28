module.exports = {
  parser: 'babel-eslint',
  plugins: ['react', 'jest', 'flowtype'],
  extends: ['airbnb', 'plugin:flowtype/recommended', 'prettier'],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
  env: {
    'jest/globals': true,
    node: true,
    browser: true,
    es6: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true,
      },
    ],
  },
};
