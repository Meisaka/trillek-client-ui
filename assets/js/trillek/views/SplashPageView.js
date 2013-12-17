define([
	'trillek/views/AbstractView',
	'tmpl!pages/splash'
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
