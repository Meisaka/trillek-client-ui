define([
	'trillek/controllers/AbstractController',
	'trillek/views/SplashPageView'
], function (AbstractController, SplashPageView) {
	/**
	 * @class
	 * @augments AbstractController
	 */
	var SplashPageController = AbstractController.subclass(/** @lends SplashPageController.prototype */ {
		/**
		 * @constructs
		 */
		constructor: function () {
			this._view = new SplashPageView();
		}
	});

	return SplashPageController;
});
