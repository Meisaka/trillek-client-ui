define([
	'qwery',
	'trillek/views/AbstractView',
	'stache!templates/pages/home'
], function (qwery, AbstractView, homePageTemplate) {
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
		},

		/**
		 * Attaches all event listeners to the newly created DOM elements. This
		 * is called after render has finished and the new HTML has been
		 * injected into the page.
		 */
		addEventListeners: function () {
			var playButton = qwery('#play-button')[0];
			playButton.addEventListener('click', this.emit.bind(this, 'playClicked'));
		}
	});

	return HomePageView;
});
