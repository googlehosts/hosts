module.exports = {
	fileName: 'hosts-compact',
	generate: (function () {
		var generateEntry = function (ip, domain) {
			if (Array.isArray(domain)) domain = domain.join(' ');
			return `${ip}\t${domain}`;
		};
		var generateComment = function (data) {
			return data.replace(/^(.)/gm, '# $1');
		};
		return require('../generate-helper')(generateEntry, generateComment, true);
	})()
};
