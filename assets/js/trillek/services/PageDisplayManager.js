define([
	'stapes',
	'lodash'
], function (Stapes, _) {
	var PageDisplayManager = Stapes.subclass(/** @lends PageDisplayManager.prototype */ {
		/**
		 * Listens to events from the provided PageRouter instance. Where
		 * appropriate, it will hide and show pages in a manner it sees fit.
		 *
		 * It will also handle the creation of container elements for the page to
		 * render to. It should do this by listening to a controller which will
		 * send it's newly rendered content in an event.
		 *
		 * Stores the passed in router and attaches the required events. It
		 * also defines the container element which will be used to render
		 * pages into.
		 *
		 * @param {Object} pageRouter Instance of the router you wish this to listen to.
		 * @constructs
		 */
		constructor: function (pageRouter) {
			this._pageRouter = pageRouter;
			pageRouter.on('pageSet', _.bind(function (payload) {
				this.setCurrentPage(payload.to);
			}, this));

			this._containerElement = document.createElement('div');
			this._containerElement.classList.add('trillek-page-container');
			document.body.appendChild(this._containerElement);
		},

		/**
		 * Gives the page a container element and displays it within the body.
		 *
		 * @param {Object} page
		 */
		setCurrentPage: function (page) {
			page.setContainerElement(this._containerElement);
		}
	});

	return PageDisplayManager;
});
