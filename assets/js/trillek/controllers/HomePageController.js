define([
	'trillek/controllers/AbstractController',
	'trillek/views/HomePageView',
	'trillek/services'
], function (AbstractController, HomePageView, services) {
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
			this._view.on('playClicked', this.onPlayClicked.bind(this));
		},

		/**
		 * Initiates the play sequence and loads the in game page.
		 */
		onPlayClicked: function () {
			services.gameBridge.play();
			this.emit('playClicked');
		}
	});

	return HomePageController;
});
