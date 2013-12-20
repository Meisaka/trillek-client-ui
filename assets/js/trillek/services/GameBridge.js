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
		 * @private
		 */
		_isGameObjectPresent: function () {
			return typeof this._gameObject === 'object';
		},

		/**
		 * Starts the game.
		 */
		play: function () {
			if (this._isGameObjectPresent()) {
				this._gameObject.play();
			}
		},

		/**
		 * Exits the game.
		 */
		exit: function () {
			if (this._isGameObjectPresent()) {
				this._gameObject.exit();
			}
		}
	});

	return GameBridge;
});
