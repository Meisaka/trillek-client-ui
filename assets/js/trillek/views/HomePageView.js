define([
	'trillek/views/AbstractView',
	'stache!templates/pages/home'
], function (AbstractView, homePageTemplate) {
	/**
	 * @class
	 * @augments AbstractView
	 */
	var HomePageView = AbstractView.subclass(/** @lends HomePageView.prototype */ {
		/**
		 * Renders the home template to HTML.
		 *
		 * @return {String} Home page HTML to display.
		 */
		render: function () {
			return homePageTemplate();
		}
	});

	return HomePageView;
});
