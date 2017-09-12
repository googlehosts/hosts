module.exports = function (generateEntry, generateComment) {
	return function (data) {
		var entries = {};
		data.hosts.forEach(function (block) {
			block.items.forEach(function (item) {
				if (item.comment === undefined) {
					if (entries[item.ip] === undefined) entries[item.ip] = [];
					if (item.domain !== undefined) entries[item.ip].push(item.domain);
					else {
						item.domains.forEach(function (domain) {
							entries[item.ip].push(domain);
						});
					}
				}
			});
		});
		var output = '';
		output += generateComment(data.header) + '\n';
		for (var ip in entries) {
			output += generateEntry(ip, entries[ip]) + '\n';
		}
		output += '\n' + generateComment(data.footer);
		return output;
	};
};
