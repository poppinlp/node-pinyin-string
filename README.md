# node-pinyin-string

[![Build Status][ci-img]][ci-url]
[![Code style][lint-img]][lint-url]
[![Dependency Status][dep-img]][dep-url]
[![Dev Dependency Status][dev-dep-img]][dev-dep-url]
[![NPM version][npm-ver-img]][npm-url]
[![NPM downloads][npm-dl-img]][npm-url]
[![NPM license][npm-lc-img]][npm-url]

将中文的汉字转化成拼音字符串。

## 特性

* 将汉字转化为拼音字符串

## 安装

通过 npm:

```shell
npm i node-pinyin-string
```

通过 yarn:

```shell
yarn add node-pinyin-string
```

## 用法

```js
const pinyin = require(“pinyin-string”);
console.log(pinyin('你好')); // nǐhǎo
```

## 参数

**这个包的汉字识别功能依赖于[这个项目](http://spmjs.io/docs/pinyin/)，所有的参数会透传过去，具体参数的含义可以移步那边查阅。**

### sep <string>

设置合并成字符串时候的分隔符，例如：

```js
pinyin('加一下分隔符吧，不然好奇怪呀思密达', {
	style: pinyin.STYLE_NORMAL,
	sep: ' '
});
// jia yi xia fen ge fu ba ， bu ran hao qi guai ya si mi da
```

[ci-img]: https://img.shields.io/travis/poppinlp/node-pinyin-string.svg?style=flat-square
[ci-url]: https://travis-ci.org/poppinlp/node-pinyin-string
[lint-img]: https://img.shields.io/badge/code%20style-handsome-brightgreen.svg?style=flat-square
[lint-url]: https://github.com/poppinlp/eslint-config-handsome
[dep-img]: https://img.shields.io/david/poppinlp/node-pinyin-string.svg?style=flat-square
[dep-url]: https://david-dm.org/poppinlp/node-pinyin-string
[dev-dep-img]: https://img.shields.io/david/dev/poppinlp/node-pinyin-string.svg?style=flat-square
[dev-dep-url]: https://david-dm.org/poppinlp/node-pinyin-string#info=devDependencies
[npm-ver-img]: https://img.shields.io/npm/v/node-pinyin-string.svg?style=flat-square
[npm-dl-img]: https://img.shields.io/npm/dm/node-pinyin-string.svg?style=flat-square
[npm-lc-img]: https://img.shields.io/npm/l/node-pinyin-string.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/node-pinyin-string
