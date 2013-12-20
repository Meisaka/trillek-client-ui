define([
	'trillek/controllers/AbstractController'
], function (AbstractController) {
	suite('controllers/AbstractController', function () {
		setup(function () {
			this.controller = new AbstractController();
		});

		suite('#renderView()', function () {
			setup(function () {
				this.renderSpy = sinon.spy();
				this.controller.on('renderComplete', this.renderSpy);
			});

			test('emits the renderComplete event', function () {
				this.controller.renderView();
				assert.isTrue(this.renderSpy.called, 'render was called');
			});
		});
	});
});
