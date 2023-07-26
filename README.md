# is-wx-request-timeout
> Detect if weixin request timeout for mina.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/is-wx-request-timeout
```

## usage
```js
import isWxRequestTimeout from '@jswork/is-wx-request-timeout';

const msg = err.errMsg; 

isWxRequestTimeout(msg); // true/false
```

## license
Code released under [the MIT license](https://github.com/afeiship/is-wx-request-timeout/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/is-wx-request-timeout
[version-url]: https://npmjs.org/package/@jswork/is-wx-request-timeout

[license-image]: https://img.shields.io/npm/l/@jswork/is-wx-request-timeout
[license-url]: https://github.com/afeiship/is-wx-request-timeout/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/is-wx-request-timeout
[size-url]: https://github.com/afeiship/is-wx-request-timeout/blob/master/dist/is-wx-request-timeout.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/is-wx-request-timeout
[download-url]: https://www.npmjs.com/package/@jswork/is-wx-request-timeout
