module.exports = {
	fileName: 'hosts',
	generate: (function () {
		var generateEntry = function (ip, domain) {
			return `${ip}\t${domain}`;
		};
		var generateComment = function (data) {
			return data.replace(/^(.)/gm, '# $1');
		};
		return require('../generate-helper')(generateEntry, generateComment);
	})()
};
