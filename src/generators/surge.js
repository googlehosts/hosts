module.exports = {
	fileName: 'surge.conf',
	generate: function (data) {
		var generateEntry = function (ip, domain) {
			return `${domain} = ${ip}`;
		};
		var generateComment = function (data) {
			return data.replace(/^(.)/gm, '# $1');
		};
		return `[Host]\n\n${require('../generate-helper')(generateEntry, generateComment)(data)}`;
	}
};
