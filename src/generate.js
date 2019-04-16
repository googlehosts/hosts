var fs = require('fs');
var jsyaml = require('js-yaml')
var path = require('path');
var glob = require('glob');
glob.sync(path.join(process.argv[2], '*.yml')).forEach(function(specFile) {
	var data = jsyaml.safeLoad(fs.readFileSync(path.join(process.argv[2], 'hosts.yml'), 'utf-8'));
	data.header = data.header.replace(/{DATE}/g, process.argv[3]);
	data.header = data.header.replace(/{YEAR}/g, process.argv[4]);
	var specSuffix = '';
	var specName = path.parse(specFile).name;
	if (specName !== 'hosts') {
		var specData = jsyaml.safeLoad(fs.readFileSync(specFile), 'utf-8');
		data.hosts = specData.hosts.concat(data.hosts);
		specSuffix = `-${specName}`;
	}
	require('./check-data')(data);
	glob.sync(path.join(__dirname, 'generators/*.js')).forEach(function (genFile) {
		var generator = require(genFile);
		var outputPath = path.parse(path.join(process.argv[5], generator.fileName));
		outputPath.base = null;
		outputPath.name += specSuffix;
		fs.writeFileSync(path.format(outputPath), generator.generate(data));
	});
});

