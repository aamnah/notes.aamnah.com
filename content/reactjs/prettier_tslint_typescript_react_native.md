---
title: React Native with Prettier, Typescript, ESLint and Expo
date: 2019-10-11

---

#### NOTE

After deciding on TSLint and implementing it, i find out that Palantir, the maintainers of TSLint actually plan to deprecate TSLint and move to ESLint, so i re-did the setup with ESLint

> In order to avoid bifurcating the linting tool space for TypeScript, we therefore plan to deprecate TSLint and focus our efforts instead on improving ESLint’s TypeScript support. 

So we're going to use [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) instead, which both the Typescript team and Palantir team plan to support

Ultimately, ESLint (`.eslintrc.yaml`) is going to be one thing that is going to have config for TypeScript, React, and Prettier.

---

### Install 

```bash
# install Expo
npm i -g expo-cli

# install Typescript and types from DefinitelyTyped
npm i -D typescript @types/react @types/react-native @types/expo

# ESLint with TypeScript support
npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

# ESLint with React support
npm i -D eslint-plugin-react

# ESLint with Prettier 
npm i -D prettier eslint-config-prettier eslint-plugin-prettier

# Additional ESLint plugins
npm i -D eslint-plugin-import eslint-plugin-jsx-a11y eslint-import-resolver-typescript


tsc --init
eslint --init
```


- `eslint` The core ESLint linting library
- `@typescript-eslint/parser` The parser that will allow ESLint to lint TypeScript code
- `@typescript-eslint/eslint-plugin` A plugin that contains a bunch of ESLint rules that are TypeScript specific
- `eslint-plugin-react` additional react rules that we need
- `eslint-plugin-import` rules around import/export
- `eslint-import-resolver-typescript` adds TypeScript support to `eslint-plugin-import`
- `eslint-plugin-jsx-a11y` for accessibility
- `prettier` for code formatting
- `eslint-config-prettier` config to disable ESLint rules that conflict with Prettier
- `eslint-plugin-prettier` Runs prettier as an ESLint rule, letting ESLint format content using Prettier.

### Configuration 

`.eslintrc.yaml`

```yaml
# Configuration: https://eslint.org/docs/user-guide/configuring
# Using with Prettier: https://prettier.io/docs/en/integrating-with-linters.html#recommended-configuration

extends:
  - 'plugin:import/errors'
  - 'plugin:jsx-a11y/recommended'
  - 'plugin:react/recommended' # Uses the recommended rules from @eslint-plugin-react
  - 'plugin:@typescript-eslint/recommended' # Uses the recommended rules from the @typescript-eslint/eslint-plugin
  - 'prettier/@typescript-eslint' # Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
  - 'plugin:prettier/recommended' # Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.

parser: '@typescript-eslint/parser' # Specifies the ESLint parser. Use TypeScriptCompiler because it has a type-checker, babel-eslint does not

plugins:
  - react
  - import
  - jsx-a11y
  - '@typescript-eslint'
  - prettier

rules:
  # ESLint rules. Can be used to overwrite rules specified from the extended configs
  'react/prop-types': 0 # aren't really useful in Typescript
  no-console: 1 # 1 is Warning

parserOptions:
  ecmaVersion: 2018 # Allows for the parsing of modern ECMAScript features
  sourceType: module # Allows for using ES6 Modules
  ecmaFeatures:
    jsx: true # Allows for the parsing of JSX

env:
  jest: true # support Jest global variables.
  es6: true # not choke on things like async/await
  browser: true # not choke on browser global variables (document, window ect.)
  node: true # support Node.js global variables and Node.js scoping.

settings:
  react:
    version: detect # tells eslint-plugin-react to detect React version to use from package.json
```

`.prettierrc.yaml`

```yaml
# .prettierrc or .prettierrc.yaml
# Options: https://prettier.io/docs/en/options.html

printWidth: 120
tabWidth: 2
useTabs: false
semi: false
singleQuote: true
quoteProps: as-needed
jsxSingleQuote: false
trailingComma: none
bracketSpacing: truek;
jsxBracketSameLine: false
arrowParens: avoid
htmlWhitespaceSensitivity: css
endOfLine: lf
```



Links
---

- [ESLint](https://eslint.org/)
- [Integrating Prettier with ESLint](https://prettier.io/docs/en/integrating-with-linters.html#eslint)
- [TSLint in 2019](https://medium.com/palantir/tslint-in-2019-1a144c2317a9)
- [How to setup React-Native with Typescript and Expo — The new way!](https://medium.com/@ch1ll0ut1/how-to-setup-react-native-with-typescript-the-new-way-6c1f1cce6ed3)
- [Using ESLint and Prettier in a TypeScript Project](https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project)
- [Setting up ESLint with Prettier, TypeScript, and Visual Studio Code](https://levelup.gitconnected.com/setting-up-eslint-with-prettier-typescript-and-visual-studio-code-d113bbec9857)
- [DefinitelyTyped](http://definitelytyped.org/)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript)
- [eslint-plugin-react-native](https://github.com/intellicode/eslint-plugin-react-native)