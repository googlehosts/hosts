module.exports = {
	fileName: 'dnsmasq-no-sni-rst.conf',
	generate: (function () {
		var generateEntry = function (ip, domain) {
			return `address=/${domain}/${ip}`;
		};
		var generateComment = function (data) {
			return data.replace(/^(.)/gm, '# $1');
		};
		return require('../generate-helper-no-sni-rst')(generateEntry, generateComment);
	})()
};
