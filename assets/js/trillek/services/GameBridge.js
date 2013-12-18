define([
	'stapes'
], function (Stapes) {
	var GameBridge = Stapes.subclass(/** @lends GameBridge.prototype */ {
		/**
		 * This wraps the game's actual API. It will provide stubbed methods if the
		 * real game API is not present within the page.
		 *
		 * @constructs
		 */
		constructor: function () {
			this._gameObject = window.game;
		},

		/**
		 * @return {Boolean}
		 */
		isGameObjectPresent: function () {
			return typeof this._gameObject === 'object';
		},

		play: function () {
			if (this.isGameObjectPresent()) {
				this._gameObject.play();
			}
		},

		exit: function () {
			if (this.isGameObjectPresent()) {
				this._gameObject.exit();
			}
		}
	});

	return GameBridge;
});
