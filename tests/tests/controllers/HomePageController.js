define([
	'trillek/controllers/HomePageController',
	'trillek/services'
], function (HomePageController, services) {
	suite('controllers/HomePageController', function () {
		setup(function () {
			this.controller = new HomePageController();
		});

		suite('#onPlayClicked()', function () {
			setup(function () {
				this.playClickedSpy = sinon.spy();
				this.controller.on('playClicked', this.playClickedSpy);

				this.playSpy = sinon.spy(services.gameBridge, 'play');
			});

			teardown(function () {
				this.playSpy.restore();
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

		suite('#onExitClicked()', function () {
			setup(function () {
				this.exitClickedSpy = sinon.spy();
				this.controller.on('exitClicked', this.exitClickedSpy);

				this.exitSpy = sinon.spy(services.gameBridge, 'exit');
			});

			teardown(function () {
				this.exitSpy.restore();
			});

			test('calls exit on the game bridge', function () {
				this.controller.onExitClicked();
				assert.isTrue(this.exitSpy.called);
			});
		});
	});
});
