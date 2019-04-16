module.exports = function (generateEntry, generateComment) {
	return function (data) {
		var output = '', blocks = [];
		output += generateComment(data.header) + '\n';
		data.hosts.forEach(function (block) {
			if (block.sni_rst !== 'yes') {
				var tmp = '';
				tmp += generateComment(data.blockHeader.replace(/{NAME}/g, block.name));
				block.items.forEach(function (item) {
					if (item.sni_rst !== 'yes') {
						if (item.comment !== undefined) {
							tmp += generateComment(item.comment);
						} else {
							if (item.domain !== undefined) tmp += generateEntry(item.ip, item.domain) + '\n';
							else {
								item.domains.forEach(function (domain) {
								tmp += generateEntry(item.ip, domain) + '\n';
							});
						}
					}
				}
			});
			tmp += generateComment(data.blockFooter.replace(/{NAME}/g, block.name));
			blocks.push(tmp);
			}
		});
		output += blocks.join('\n');
		output += '\n' + generateComment(data.footer);
		return output;
	};
};
