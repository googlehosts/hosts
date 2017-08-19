module.exports = {
	fileName: 'dnsmasq.conf',
	generate: (function () {
		var generateEntry = function (ip, domain) {
			return `address=/${domain}/${ip}`;
		};
		var generateComment = function (data) {
			return data.replace(/^(.)/gm, '# $1');
		};
		return require('../generate-helper')(generateEntry, generateComment);
	})()
};
