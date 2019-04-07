module.exports = {
	fileName: 'dnscrypt-proxy-cloaking-no-sni-rst.txt',
	generate: (function () {
		var generateEntry = function (ip, domain) {
			return `${domain}\t${ip}`;
		};
		var generateComment = function (data) {
			return data.replace(/^(.)/gm, '# $1');
		};
		return require('../generate-helper-no-sni-rst')(generateEntry, generateComment);
	})()
};
