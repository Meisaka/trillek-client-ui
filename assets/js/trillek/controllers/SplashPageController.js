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
		},

		/**
		 * Renders all views stored within the controller. Sends the result out
		 * through the renderComplete event.
		 */
		renderAll: function () {
			this.emit('renderComplete', this._view.render());
		}
	});

	return SplashPageController;
});
