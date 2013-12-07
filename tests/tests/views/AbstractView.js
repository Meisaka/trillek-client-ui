define([
	'trillek/views/AbstractView'
], function (AbstractView) {
	suite('views/AbstractView', function () {
		setup(function () {
			this.view = new AbstractView();
		});

		suite('#render()', function () {
			test('should be a noop', function () {
				assert.isUndefined(this.view.render(), 'view render method is a noop function');
			});
		});

		suite('#addEventListeners()', function () {
			test('should be a noop', function () {
				assert.isUndefined(this.view.addEventListeners(), 'adding the listeners is a noop');
			});
		});
	});
});
