module.exports = {
	fileName: 'hosts.rsc',
	generate: function (data) {
		var generateEntry = function (ip, domain) {
			return `add address=${ip} name=${domain}`;
		};
		var generateComment = function (data) {
			return data.replace(/^(.)/gm, '# $1');
		};
		return `/ip dns static\n\n${require('../generate-helper')(generateEntry, generateComment)(data)}`;
	}
};
