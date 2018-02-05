module.exports = {
	fileName: 'dnscrypt-proxy-cloaking.txt',
	generate: (function () {
		var generateEntry = function (ip, domain) {
			return `${domain}\t${ip}`;
		};
		var generateComment = function (data) {
			return data.replace(/^(.)/gm, '# $1');
		};
		return require('../generate-helper')(generateEntry, generateComment);
	})()
};
