define([
	'trillek/pages/all'
], function (allPages) {
	suite('pages/all', function () {
		test('should be an array', function () {
			assert.isArray(allPages);
		});
	});
});
