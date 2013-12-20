define([
	'trillek/views/GamePageView'
], function (GamePageView) {
	suite('views/GamePageView', function () {
		setup(function () {
			this.view = new GamePageView();
		});

		suite('#render()', function () {
			test('returns a string', function () {
				var result = this.view.render();
				assert.isString(result, 'render was a string');
			});
		});
	});
});
