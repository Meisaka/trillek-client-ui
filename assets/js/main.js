require([
	'require-config',
	'crossroads',
	'hasher'
], function (requireConfig, crossroads, hasher) {
	var parseHash = crossroads.parse.bind(crossroads);
	hasher.initialized.add(parseHash);
	hasher.changed.add(parseHash);
	hasher.init();
});
