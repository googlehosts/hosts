module.exports = {
	fileName: 'hosts-compact',
	generate: (function () {
		var generateEntry = function (ip, domain) {
			return `${ip}\t${domain.join(' ')}`;
		};
		var generateComment = function (data) {
			return data.replace(/^(.)/gm, '# $1');
		};
		return require('../generate-helper-compact')(generateEntry, generateComment);
	})()
};
