module.exports = {
	fileName: 'surge-no-sni-rst.conf',
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
		return surgeHeader + `${require('../generate-helper-no-sni-rst')(generateEntry, generateComment)(data)}`;
	}
};
