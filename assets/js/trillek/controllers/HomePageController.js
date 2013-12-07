define([
	'trillek/controllers/AbstractController',
	'trillek/views/HomePageView'
], function (AbstractController, HomePageView) {
	/**
	 * @class
	 * @augments AbstractController
	 */
	var HomePageController = AbstractController.subclass(/** @lends HomePageController.prototype */ {
		/**
		 * @constructs
		 */
		constructor: function () {
			this._view = new HomePageView();
			this._view.on('playClicked', trillek.gameBridge.play);
		}
	});

	return HomePageController;
});
