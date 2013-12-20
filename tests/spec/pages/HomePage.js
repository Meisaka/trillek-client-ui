define([
	'trillek/pages/HomePage',
	'trillek/services',
	'trillek/pages/GamePage'
], function (HomePage, services, GamePage) {
	suite('pages/HomePage', function () {
		setup(function () {
			this.page = new HomePage();
		});

		suite('#_onPlayClicked()', function () {
			setup(function () {
				this.hashSpy = sinon.spy(services.pageRouter, 'setHashUsingPage');
			});

			teardown(function () {
				this.hashSpy.restore();
			});

			test('attempts to set the hash to GamePage', function () {
				this.page._onPlayClicked();
				assert.isTrue(this.hashSpy.calledWith(GamePage), 'hash was called');
			});
		});
	});
});
