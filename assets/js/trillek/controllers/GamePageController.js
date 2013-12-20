define([
	'trillek/controllers/AbstractController',
	'trillek/views/GamePageView'
], function (AbstractController, GamePageView) {
	var GamePageController = AbstractController.subclass(/** @lends GamePageController.prototype */ {
		/**
		 * @constructs
		 * @augments AbstractController
		 */
		constructor: function () {
			this._view = new GamePageView();
		}
	});

	return GamePageController;
});
