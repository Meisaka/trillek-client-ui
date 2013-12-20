define([
	'trillek/views/SplashPageView'
], function (SplashPageView) {
	suite('views/SplashPageView', function () {
		setup(function () {
			this.view = new SplashPageView();
		});

		suite('#render()', function () {
			test('returns a string', function () {
				var result = this.view.render();
				assert.isString(result, 'render returned a string');
			});
		});
	});
});
