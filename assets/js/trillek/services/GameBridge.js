define([
	'stapes'
], function (Stapes) {
	/**
	 * This wraps the game's actual API. It will provide stubbed methods if the
	 * real game API is not present within the page.
	 *
	 * @class
	 */
	var GameBridge = Stapes.subclass(/** @lends GameBridge.prototype */ {
	});

	return GameBridge;
});
