var assert = require('assert');
var set = {};
var detected = false;
function checkDomain(domain) {
	if (set[domain] && domain !== 'localhost') {
		console.error(`${domain} has already been added.`);
		detected = true;
	}
	set[domain] = true;
}
module.exports = function (data) {
	data.hosts.forEach(function (block) {
		block.items.forEach(function (item) {
			if (item.comment === undefined) {
				if (item.domain !== undefined) checkDomain(item.domain);
				else item.domains.forEach(function (domain) { checkDomain(domain); });
			}
		});
	});
	assert(!detected, 'Duplication(s) detected.');
};
