define([
	'trillek/pages/AbstractPage',
	'lodash',
	'trillek/controllers/GamePageController'
], function (AbstractPage, _, GamePageController) {
	/**
	 * Transparent page that renders the game underneath it.
	 *
	 * @class GamePage
	 * @augments AbstractPage
	 */
	var GamePage = AbstractPage.subclass(/** @lends GamePage.prototype */ {
		/**
		 * Initialises the controller for the game page.
		 */
		initialisePage: function () {
			this._controller = new GamePageController();
			this._controller.on('renderComplete', _.bind(this.setContainerElementHTML, this));
			this._controller.renderView();
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
