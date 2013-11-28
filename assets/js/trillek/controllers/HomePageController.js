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
		},

		/**
		 * Renders all views stored within the controller. Sends the result out
		 * through the renderComplete event.
		 */
		renderAll: function () {
			this.emit('renderComplete', this._view.render());
		}
	});

	return HomePageController;
});
