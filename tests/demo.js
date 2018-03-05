const pinyin = require('../src/pinyin.js');

console.log(pinyin('你好'));
console.log(pinyin('你是怪蜀黍么？好吓人呀'));
console.log(
	pinyin('这句话没有音调的哦', {
		style: pinyin.STYLE_NORMAL
	})
);
console.log(
	pinyin('加一下分隔符吧，不然好奇怪呀思密达', {
		style: pinyin.STYLE_NORMAL,
		sep: ' '
	})
);
console.log(pinyin('so what?'));
