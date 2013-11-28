define([
	'trillek/pages/AbstractPage',
	'trillek/controllers/HomePageController'
], function (AbstractPage, HomePageController) {
	/**
	 * Initial page to load after the splash. This will act as the home or hub
	 * page where the user will branch out from.
	 *
	 * @class
	 * @augments AbstractPage
	 */
	var HomePage = AbstractPage.subclass(/** @lends HomePage.prototype */ {
		/**
		 * Initialises the controller for the home page.
		 */
		initialisePage: function () {
			this._controller = new HomePageController();
			this._controller.on('renderComplete', this.setContainerElementHTML.bind(this));
			this._controller.renderAll();
		}
	});

	HomePage.extend(/** @lends HomePage */ {
		/**
		 * When this route is matched, this page will be instantiated.
		 *
		 * @param {Object} crossroads The current crossroads object you should create from.
		 * @return {Object} JS-Signal route from crossroads.
		 */
		createRoute: function (crossroads) {
			return crossroads.addRoute('home');
		}
	});

	return HomePage;
});
