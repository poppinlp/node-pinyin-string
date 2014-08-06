/*
 * pinyin-string
 * https://github.com/poppinlp/node-pinyin-string
 *
 * Copyright (c) 2014 "PoppinLp" Liang Peng
 * Licensed under the MIT license.
 */

'use strict';

var pinyin = require('pinyin');

module.exports = function (han, options) {
    return pinyin(han, options || {}).join(options ? (options.sep || '') : '');
};
module.exports.STYLE_NORMAL = pinyin.STYLE_NORMAL;
module.exports.STYLE_TONE = pinyin.STYLE_TONE;
module.exports.STYLE_TONE2 = pinyin.STYLE_TONE2;
module.exports.STYLE_INITIALS = pinyin.STYLE_INITIALS;
module.exports.STYLE_FIRST_LETTER = pinyin.STYLE_FIRST_LETTER;
