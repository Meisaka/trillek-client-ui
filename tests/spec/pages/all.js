define([
	'trillek/pages/all'
], function (allPages) {
	suite('pages/all', function () {
		test('should be an array', function () {
			assert.isArray(allPages, 'result was an array (we do not care about the contents right now)');
		});
	});
});
