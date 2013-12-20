define([
	'trillek/services/GameBridge'
], function (GameBridge) {
	suite('services/GameBridge', function () {
		setup(function () {
			this.bridge = new GameBridge();

			this.playSpy = sinon.spy();
			this.exitSpy = sinon.spy();
			this.gameStub = window.game = {
				play: this.playSpy,
				exit: this.exitSpy
			};
			this.bridgeWithObject = new GameBridge();
		});

		teardown(function () {
			delete window.game;
		});

		suite('#_isGameObjectPresent()', function () {
			test('returns false with no bridge object', function () {
				assert.isFalse(this.bridge._isGameObjectPresent(), 'the game object was not present');
			});

			test('returns true with a bridge object globally', function () {
				assert.isTrue(this.bridgeWithObject._isGameObjectPresent(), 'the game object was present');
			});
		});

		suite('#play()', function () {
			test('calls play on the game object', function () {
				this.bridgeWithObject.play();
				assert.isTrue(this.playSpy.called, 'play was called');
			});
		});

		suite('#exit()', function () {
			test('calls exit on the game object', function () {
				this.bridgeWithObject.exit();
				assert.isTrue(this.exitSpy.called, 'exit was called');
			});
		});
	});
});
