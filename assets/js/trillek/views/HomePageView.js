define([
	'trillek/views/AbstractView',
	'lodash',
	'trillek/services',
	'tmpl!pages/home',
	'i18n!trillek/nls/buttons'
], function (AbstractView, _, services, homePageTemplate, buttons) {
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
			var playButton = services.selector.find('#play-button');
			var exitButton = services.selector.find('#exit-button');

			playButton.addEventListener('click', _.bind(this.emit, this, 'playClicked'));
			exitButton.addEventListener('click', _.bind(this.emit, this, 'exitClicked'));
		}
	});

	return HomePageView;
});
