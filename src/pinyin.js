const pinyin = require('pinyin');

module.exports = (han, options) => pinyin(han, options).join(options ? options.sep || '' : '');
module.exports.STYLE_NORMAL = pinyin.STYLE_NORMAL;
module.exports.STYLE_TONE = pinyin.STYLE_TONE;
module.exports.STYLE_TONE2 = pinyin.STYLE_TONE2;
module.exports.STYLE_TO3NE = pinyin.STYLE_TO3NE;
module.exports.STYLE_INITIALS = pinyin.STYLE_INITIALS;
module.exports.STYLE_FIRST_LETTER = pinyin.STYLE_FIRST_LETTER;
