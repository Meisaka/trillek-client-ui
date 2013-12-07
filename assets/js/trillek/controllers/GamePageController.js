define([
	'trillek/controllers/AbstractController',
	'trillek/views/GamePageView'
], function (AbstractController, GamePageView) {
	/**
	 * @class
	 * @augments AbstractController
	 */
	var GamePageController = AbstractController.subclass(/** @lends GamePageController.prototype */ {
		/**
		 * @constructs
		 */
		constructor: function () {
			this._view = new GamePageView();
		}
	});

	return GamePageController;
});
