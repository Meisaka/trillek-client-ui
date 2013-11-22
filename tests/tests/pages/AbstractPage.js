define([
	'trillek/pages/AbstractPage'
], function (AbstractPage) {
	suite('pages/AbstractPage', function () {
		setup(function () {
			this.page = new AbstractPage();
		});

		suite('route', function () {
			test('static route in AbstractPage should be a noop', function () {
				assert.isUndefined(AbstractPage.route(), 'the route is a noop function');
			});
		});
	});
});
