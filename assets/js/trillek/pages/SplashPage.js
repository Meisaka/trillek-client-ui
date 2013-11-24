define([
	'crossroads',
	'trillek/pages/AbstractPage',
	'trillek/controllers/SplashPageController'
], function (crossroads, AbstractPage, SplashPageController) {
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
		}
	});

	SplashPage.extend(/** @lends SplashPage */ {
		/**
		 * When this route is matched, this page will be instantiated.
		 *
		 * @type {Object}
		 */
		route: crossroads.addRoute('/'),
	});

	return SplashPage;
});
