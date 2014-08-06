# node-pinyin-string

[![Build Status](https://travis-ci.org/poppinlp/node-pinyin-string.svg?branch=master)](https://travis-ci.org/poppinlp/node-pinyin-string)
[![Dependency Status](https://david-dm.org/poppinlp/node-pinyin-string.svg)](https://david-dm.org/poppinlp/node-pinyin-string)
[![devDependency Status](https://david-dm.org/poppinlp/node-pinyin-string/dev-status.svg)](https://david-dm.org/poppinlp/node-pinyin-string#info=devDependencies)

将中文的汉字转化成拼音字符串。

## 特性

- 根据词组智能匹配最正确的拼音。
- 支持多音字。
- 简单的繁体支持。
- 支持多种不同拼音风格。

## 安装

via npm:

```shell
npm install pinyin
```

via spm3:

```shell
spm install pinyin
```

## 用法

开发者：

```js
var pinyin = require(“pinyin”);

console.log(pinyin(“中心”));    // [ [ ‘zhōng’ ], [ ‘xīn’ ] ]
console.log(pinyin(“中心”, {
    heteronym: true               // 启用多音字模式
}));                            // [ [ ‘zhōng’, ‘zhòng’ ], [ ‘xīn’ ] ]
console.log(pinyin(“中心”, {
    style: pinyin.STYLE_INITIALS, // 设置拼音风格
    heteronym: true
}));                            // [ [ ‘zh’ ], [ ‘x’ ] ]
```

命令行：

```shell
$ pinyin 中心
zhōng xīn
$ pinyin -h
```

## API

### 方法 `<Array> pinyin(words[, options])`

将传入的中文字符串(words)转换成拼音符号串。

options 是可选的，可以设定拼音风格，或打开多音字选项。

返回二维数组，第一维每个数组项位置对应每个中文字符串位置。 第二维是各个汉字的读音列表，多音字会有多个拼音项。

### 参数 `<Boolean> options.heteronym`

是否启用多音字模式，默认关闭。

关闭多音字模式时，返回每个汉字第一个匹配的拼音。

启用多音字模式时，返回多音字的所有拼音列表。

### 参数 `<String> options.sep`

字符串中用于分隔拼音的分隔符，默认为空字符串。

### 参数 `<Object> options.style`

指定拼音 风格。可以通过以下几种 `STYLE_` 开头的静态属性进行指定。

### 静态属性 `.STYLE_NORMAL`

普通风格，即不带音标。

如：pin yin

### 静态属性 `.STYLE_TONE`

声调风格，拼音声调在韵母第一个字母上。

注：这是默认的风格。

如：`pīn yīn`

### 静态属性 `.STYLE_TONE2`

声调风格2，即拼音声调在各个拼音之后，用数字 [0-4] 进行表示。

如：`pin1 yin1`

### 静态属性 `.STYLE_INITIALS`

声母风格，只返回各个拼音的声母部分。

如：`中国` 的拼音 `zh g`

例外，对于只有韵母的汉字（如『爱、啊』等），会先转成不带音标的普通风格。

### 静态属性 `.STYLE_FIRST_LETTER`

首字母风格，只返回拼音的首字母部分。

如：`p y`

## Test

```shell
npm test
```

__本包的汉字识别功能依赖于[这个包](http://spmjs.io/docs/pinyin/)，感谢其开发者。__
