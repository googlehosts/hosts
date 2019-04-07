module.exports = {
	fileName: 'hosts-no-sni-rst',
	generate: (function () {
		var generateEntry = function (ip, domain) {
			return `${ip}\t${domain}`;
		};
		var generateComment = function (data) {
			return data.replace(/^(.)/gm, '# $1');
		};
		return require('../generate-helper-no-sni-rst')(generateEntry, generateComment);
	})()
};
