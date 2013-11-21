define([
	'trillek/views/AbstractView'
], function (AbstractView) {
	suite('views/AbstractView', function () {
		suite('#render()', function () {
			test('should be a noop', function () {
				var view = new AbstractView();
				assert.isUndefined(view.render());
			});
		});
	});
});
