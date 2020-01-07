module.exports = {
  "env": {
    "node": true
  },
  "extends": [
    "prettier",
    "prettier/@typescript-eslint",
    "eslint:recommended",
    "plugin:wdio/recommended",
    "plugin:@typescript-eslint/eslint-recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "project": ["./tsconfig.json"],
    "sourceType": "module"
  },
  "plugins": [
    "prettier",
    "wdio",
    "@typescript-eslint"
  ],
  "rules": {
    "indent": "off",
    "@typescript-eslint/indent": "off", // indentation is handled by prettier
    "@typescript-eslint/member-delimiter-style": ["error", {
      "multiline": {
        "delimiter": "none"
      },
      "singleline": {
        "delimiter": "semi"
      }
    }],
    "@typescript-eslint/no-unused-vars": [
      "error", {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": false,
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_"
      }
    ],
    "@typescript-eslint/camelcase": [
      "error", {
        "properties": "always",
        "ignoreDestructuring": false
      }
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "no-console": "error",
    "@typescript-eslint/unbound-method": ["error", {
      "ignoreStatic": true
    }],
    "@typescript-eslint/prefer-optional-chain": "error"
  }
}
