define([
	'crossroads',
	'hasher'
], function (crossroads, hasher) {
	return {
		start: function () {
			var parseHash = crossroads.parse.bind(crossroads);
			hasher.initialized.add(parseHash);
			hasher.changed.add(parseHash);
			hasher.init();
		}
	};
});
