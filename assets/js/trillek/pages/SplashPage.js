define([
	'trillek/pages/AbstractPage',
	'trillek/controllers/SplashPageController'
], function ( AbstractPage, SplashPageController) {
	/**
	 * Page to display after the game opens. This is used as the initial route
	 * and could handle a loading progress bar in the future if the client
	 * requires it. Until then, it's just a familiar welcome screen for the
	 * user.
	 *
	 * @class
	 * @augments AbstractPage
	 */
	var SplashPage = AbstractPage.subclass(/** @lends SplashPage.prototype */ {
		/**
		 * Initialises the controller for the splash page.
		 */
		initialisePage: function () {
			this._controller = new SplashPageController();
			this._controller.on('renderComplete', this.setContainerElementHTML.bind(this));
			this._controller.renderAll();
		}
	});

	SplashPage.extend(/** @lends SplashPage */ {
		/**
		 * When this route is matched, this page will be instantiated.
		 *
		 * @param {Object} crossroads The current crossroads object you should create from.
		 * @return {Object} JS-Signal route from crossroads.
		 */
		createRoute: function (crossroads) {
			return crossroads.addRoute('splash');
		}
	});

	return SplashPage;
});
