define([
	'trillek/controllers/AbstractController',
	'trillek/views/SplashPageView'
], function (AbstractController, SplashPageView) {
	var SplashPageController = AbstractController.subclass(/** @lends SplashPageController.prototype */ {
		/**
		 * @constructs
		 * @augments AbstractController
		 */
		constructor: function () {
			this._view = new SplashPageView();
		}
	});

	return SplashPageController;
});
