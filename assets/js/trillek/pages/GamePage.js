define([
	'trillek/pages/AbstractPage',
	'trillek/controllers/GamePageController'
], function (AbstractPage, GamePageController) {
	/**
	 * Transparent page that renders the game underneath it.
	 *
	 * @class
	 * @augments AbstractPage
	 */
	var GamePage = AbstractPage.subclass(/** @lends GamePage.prototype */ {
		/**
		 * Initialises the controller for the game page.
		 */
		initialisePage: function () {
			this._controller = new GamePageController();
			this._controller.on('renderComplete', this.setContainerElementHTML.bind(this));
			this._controller.renderAll();
		}
	});

	GamePage.extend(/** @lends GamePage */ {
		/**
		 * When this route is matched, this page will be instantiated.
		 *
		 * @param {Object} crossroads The current crossroads object you should create from.
		 * @return {Object} JS-Signal route from crossroads.
		 */
		getRoute: function (crossroads) {
			this._route = this._route || crossroads.addRoute('game');
			return this._route;
		}
	});

	return GamePage;
});
