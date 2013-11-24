define([
	'trillek/views/AbstractView',
	'stache!templates/splashPage'
], function (AbstractView, splashPageTemplate) {
	/**
	 * @class
	 * @augments AbstractView
	 */
	var SplashPageView = AbstractView.subclass(/** @lends SplashPageView.prototype */ {
		/**
		 * Renders the splash template to HTML.
		 *
		 * @return {String} Splash page HTML to display.
		 */
		render: function () {
			return splashPageTemplate();
		}
	});

	return SplashPageView;
});
