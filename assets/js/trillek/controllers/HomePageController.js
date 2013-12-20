define([
	'trillek/controllers/AbstractController',
	'trillek/views/HomePageView',
	'trillek/services'
], function (AbstractController, HomePageView, services) {
	var HomePageController = AbstractController.subclass(/** @lends HomePageController.prototype */ {
		/**
		 * @constructs
		 * @augments AbstractController
		 */
		constructor: function () {
			this._view = new HomePageView();
			this._view.on('playClicked', this._onPlayClicked.bind(this));
			this._view.on('exitClicked', this._onExitClicked.bind(this));
		},

		/**
		 * Initiates the play sequence and loads the in game page.
		 *
		 * @private
		 */
		_onPlayClicked: function () {
			services.gameBridge.play();
			this.emit('playClicked');
		},

		/**
		 * Exits the application.
		 *
		 * @private
		 */
		_onExitClicked: function () {
			services.gameBridge.exit();
		}
	});

	return HomePageController;
});
