// "off" or 0 - turn the rule off
// "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
// "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)

module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  env: { jest: true },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    quotes: [2, 'single'],
    semi: [2, 'never'],
    'no-use-before-define': [1, { variables: false }],
    'global-require': 0,
    'no-underscore-dangle': 0,
    'react/prop-types': 0,
    'react/sort-comp': 0,
    'import/prefer-default-export': 0,
    'max-len': [2, { code: 100 }],
    'react/jsx-one-expression-per-line': 0,
    'react/prefer-stateless-function': 0,
    'no-eval': 0,
    'prettier/prettier': 2,
    'no-nested-ternary': 0,
    'no-plusplus': 0,
    'jsx-a11y/accessible-emoji': 0,
    'linebreak-style': 0,
    'no-unused-expressions': 1,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'arrow-parens': 'as-needed',
    /* This one doesn't work yet. Not sure why. */
    'import/no-anonymous-default-export': [
      0,
      {
        allowArray: true,
        allowArrowFunction: true,
        allowAnonymousClass: true,
        allowAnonymousFunction: true,
        allowCallExpression: true, // The true value here is for backward compatibility
        allowLiteral: true,
        allowObject: true,
      },
    ],
  },
  globals: {
    window: true,
    document: true,
    fetch: true,
  },
}
