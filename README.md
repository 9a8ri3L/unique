![GitHub Release](https://img.shields.io/github/v/release/9a8ri3L/unique)
![NPM License](https://img.shields.io/npm/l/%40g-lib%2Funique)
![GitHub forks](https://img.shields.io/github/forks/9a8ri3L/unique?style=plastix&color=yellow)
![GitHub stars](https://img.shields.io/github/stars/9a8ri3L/unique?style=flat-square)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/1adbc875e33c46d1a07ee1d2dc8abdf0)](https://app.codacy.com/gh/9a8ri3L/unique/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
![NPM Downloads](https://img.shields.io/npm/dt/%40g-lib%2Funique)

![GitHub commits since latest release](https://img.shields.io/github/commits-since/9a8ri3L/unique/latest)
![GitHub contributors](https://img.shields.io/github/contributors-anon/9a8ri3L/unique)
![npm package minimized gzipped size](https://img.shields.io/bundlejs/size/%40g-lib%2Funique)

# unique

### Function that removes any duplicated elements in the array.

#### install

```
npm i @g-lib/unique
```

```
yarn add @g-lib/unique
```

```
pnpm add @g-lib/unique
```

#### Usage:

```ts
import unique from '@g-lib/unique';

// or

const unique = require('@g-lib/unique');

console.log(
  unique([
    { a: { key: 'a' }, b: 'b' },
    { a: { key: 'a' }, b: 'b' },
  ])
); // [{a: {key: "a"}, b: "b"}]
console.log(
  unique([
    [1, 2, true, undefined],
    [1, 2, true, undefined],
  ])
); // [[1,2,true, undefined ]]

// ...
```

#### Function can be used with array of multiple types

#### @see [Tests](https://github.com/9a8ri3L/unique/tree/main/__tests__)

#### Contributing is always welcomed.

#### @License [MIT](https://choosealicense.com/licenses/mit/)
