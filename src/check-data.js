var assert = require('assert');
var validator = require('is-my-ip-valid');
var validate4 = validator({ version: 4 })
var set = {};
var ok = true;
function checkType(obj, propName, typeName) {
	var prop = obj[propName];
	var actualTypeName = Array.isArray(prop) ? 'array' : typeof prop;
	if (actualTypeName !== typeName) {
		console.error(`\x1b[31m"${propName}"\x1b[0m must be of type: \x1b[31m${typeName}\x1b[0m, but it is: \x1b[31m${actualTypeName} "${prop}"\x1b[0m.`);
		ok = false;
		return false;
	}
	return true;
}
function checkDomain(domain) {
	if (set[domain] && domain !== 'localhost' && domain !== 'ss-1.googlehosts.org' && domain !== 'ss-2.googlehosts.org' && domain !== 'ss-3.googlehosts.org' && domain !== 'ss-4.googlehosts.org') {
		console.error(`\x1b[31m${domain}\x1b[0m has already been added.`);
		ok = false;
		return false;
	}
	set[domain] = true;
	return true;
}
module.exports = function (data) {
	checkType(data, 'header', 'string');
	checkType(data, 'footer', 'string');
	checkType(data, 'blockHeader', 'string');
	checkType(data, 'blockFooter', 'string');
	if (checkType(data, 'hosts', 'array')) {
		data.hosts.forEach(function (block) {
			checkType(block, 'name', 'string');
			if (checkType(block, 'items', 'array')) {
				block.items.forEach(function (item) {
					if (item.comment !== undefined) {
						checkType(item, 'comment', 'string')
					} else {
						if (checkType(item, 'ip', 'string')) {
							if (!validate4(item.ip)) {
								console.error(`Invalid IP address: \x1b[31m${item.ip}\x1b[0m.`);
								ok = false;
							}
						}
						if (item.domain !== undefined) {
							if (checkType(item, 'domain', 'string')) {
								checkDomain(item.domain);
							}
						} else if (checkType(item, 'domains', 'array')) {
							item.domains.forEach(function (domain) {
								if (checkType({ domains: domain }, 'domains', 'string')) {
									checkDomain(domain);
								}
							});
						}
					}
				});
			}
		});
	}
	assert(ok, 'Problem(s) detected in the data files.');
};
