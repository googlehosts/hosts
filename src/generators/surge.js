module.exports = {
	fileName: 'surge.conf',
	generate: function (data) {
		var generateEntry = function (ip, domain) {
			return `${domain} = ${ip}`;
		};
		var generateComment = function (data) {
			return data.replace(/^(.)/gm, '# $1');
		};
		var surgeHeader =
`#!MANAGED-CONFIG https://github.com/googlehosts/hosts/raw/master/hosts-files/surge.conf
[Rule]
FINAL,DIRECT
[Host]


`
		return surgeHeader + `${require('../generate-helper')(generateEntry, generateComment)(data)}`;
	}
};
