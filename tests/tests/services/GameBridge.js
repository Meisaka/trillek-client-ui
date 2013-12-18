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

		suite('#isGameObjectPresent()', function () {
			test('returns false with no bridge object', function () {
				assert.isFalse(this.bridge.isGameObjectPresent());
			});

			test('returns true with a bridge object globally', function () {
				assert.isTrue(this.bridgeWithObject.isGameObjectPresent());
			});
		});

		suite('#play()', function () {
			test('calls play on the game object', function () {
				this.bridgeWithObject.play();
				assert.isTrue(this.playSpy.called);
			});
		});

		suite('#exit()', function () {
			test('calls exit on the game object', function () {
				this.bridgeWithObject.exit();
				assert.isTrue(this.exitSpy.called);
			});
		});
	});
});
