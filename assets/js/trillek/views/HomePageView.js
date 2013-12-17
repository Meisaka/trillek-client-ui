define([
	'lodash',
	'qwery',
	'trillek/views/AbstractView',
	'tmpl!pages/home',
	'i18n!trillek/nls/buttons'
], function (_, qwery, AbstractView, homePageTemplate, buttons) {
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
			return homePageTemplate({
				i18n: {
					buttons: buttons
				}
			});
		},

		/**
		 * Attaches all event listeners to the newly created DOM elements. This
		 * is called after render has finished and the new HTML has been
		 * injected into the page.
		 */
		addEventListeners: function () {
			var playButton = _.first(qwery('#play-button'));
			playButton.addEventListener('click', this.emit.bind(this, 'playClicked'));
		}
	});

	return HomePageView;
});
