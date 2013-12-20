define([
	'trillek/controllers/HomePageController',
	'trillek/services'
], function (HomePageController, services) {
	suite('controllers/HomePageController', function () {
		setup(function () {
			this.controller = new HomePageController();
		});

		suite('#_onPlayClicked()', function () {
			setup(function () {
				this.playClickedSpy = sinon.spy();
				this.controller.on('playClicked', this.playClickedSpy);

				this.playSpy = sinon.spy(services.gameBridge, 'play');
			});

			teardown(function () {
				this.playSpy.restore();
			});

			test('calls play on the game bridge', function () {
				this.controller._onPlayClicked();
				assert.isTrue(this.playSpy.called, 'play was called');
			});

			test('emits playClicked', function () {
				this.controller._onPlayClicked();
				assert.isTrue(this.playClickedSpy.called, 'playClicked was called');
			});
		});

		suite('#_onExitClicked()', function () {
			setup(function () {
				this.exitClickedSpy = sinon.spy();
				this.controller.on('exitClicked', this.exitClickedSpy);

				this.exitSpy = sinon.spy(services.gameBridge, 'exit');
			});

			teardown(function () {
				this.exitSpy.restore();
			});

			test('calls exit on the game bridge', function () {
				this.controller._onExitClicked();
				assert.isTrue(this.exitSpy.called, 'exit was called');
			});
		});
	});
});
