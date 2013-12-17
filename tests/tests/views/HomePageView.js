define([
	'trillek/views/HomePageView'
], function (HomePageView) {
	suite('views/HomePageView', function () {
		setup(function () {
			this.view = new HomePageView();
		});

		suite('#render()', function () {
			test('returns a string', function () {
				var result = this.view.render();
				assert.isString(result);
			});
		});
	});
});
