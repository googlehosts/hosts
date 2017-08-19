var fs = require('fs');
var jsyaml = require('js-yaml')
var path = require('path');
var glob = require('glob');
glob.sync(path.join(process.argv[2], '*.yml')).forEach(function(spec_file) {
	var data = jsyaml.safeLoad(fs.readFileSync(path.join(process.argv[2], 'hosts.yml'), 'utf-8'));
	data.header = data.header.replace(/{DATE}/g, process.argv[3]);
	var spec_suffix = '';
	var spec_name = path.parse(spec_file).name;
	if (spec_name != 'hosts') {
		var spec_data = jsyaml.safeLoad(fs.readFileSync(spec_file), 'utf-8');
		data.hosts = spec_data.hosts.concat(data.hosts);
		spec_suffix = `-${spec_name}`;
	}
	glob.sync(path.join(__dirname, 'generators/*.js')).forEach(function (gen_file) {
		var generator = require(gen_file);
		var output_path = path.parse(path.join(process.argv[4], generator.file_name));
		output_path.base = null;
		output_path.name += spec_suffix;
		fs.writeFileSync(path.format(output_path), generator.generate(data));
	});
});

