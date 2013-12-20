define([
	'trillek/controllers/AbstractController',
	'lodash',
	'trillek/views/HomePageView',
	'trillek/services'
], function (AbstractController, _, HomePageView, services) {
	var HomePageController = AbstractController.subclass(/** @lends HomePageController.prototype */ {
		/**
		 * @constructs
		 * @augments AbstractController
		 */
		constructor: function () {
			this._view = new HomePageView();
			this._view.on('playClicked', _.bind(this._onPlayClicked, this));
			this._view.on('exitClicked', _.bind(this._onExitClicked, this));
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
