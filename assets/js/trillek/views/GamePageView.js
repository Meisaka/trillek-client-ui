define([
	'trillek/views/AbstractView',
	'tmpl!pages/game'
], function (AbstractView, gamePageTemplate) {
	/**
	 * @class
	 * @augments AbstractView
	 */
	var GamePageView = AbstractView.subclass(/** @lends GamePageView.prototype */ {
		/**
		 * Renders the game template to HTML.
		 *
		 * @return {String} Game page HTML to display.
		 */
		render: function () {
			return gamePageTemplate();
		}
	});

	return GamePageView;
});
