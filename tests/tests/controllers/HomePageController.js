define([
	'trillek/controllers/HomePageController'
], function (HomePageController) {
	suite('controllers/HomePageController', function () {
		setup(function () {
			this.controller = new HomePageController();
		});

		suite('#onPlayClicked()', function () {
			setup(function () {
				this.playClickedSpy = sinon.spy();
				this.controller.on('playClicked', this.playClickedSpy);

				this.playSpy = sinon.spy();
				window.trillek = {
					gameBridge: {
						play: this.playSpy
					}
				};
			});

			teardown(function () {
				delete window.trillek;
			});

			test('calls play on the game bridge', function () {
				this.controller.onPlayClicked();
				assert.isTrue(this.playSpy.called);
			});

			test('emits playClicked', function () {
				this.controller.onPlayClicked();
				assert.isTrue(this.playClickedSpy.called);
			});
		});
	});
});
