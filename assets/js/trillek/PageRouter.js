define([
	'stapes',
	'crossroads',
	'hasher'
], function (Stapes, crossroads, hasher) {
	/**
	 * Thin wrapper around the crossroads and hasher libraries. Allows for easy
	 * initialisation and mapping of pages to routes.
	 *
	 * @class
	 */
	var PageRouter = Stapes.subclass(/** @lends PageRouter.prototype */ {
		/**
		 * Initialises the hasher module and hooks it into crossroads. On
		 * initialisation, the hasher will check the hash for the first time.
		 */
		initialiseHasher: function () {
			var parseHash = crossroads.parse.bind(crossroads);
			hasher.initialized.add(parseHash);
			hasher.changed.add(parseHash);
			hasher.init();
		},

		/**
		 * Binds the page's route.matched signal to setCurrentPage and the
		 * routeMatched event. After binding a page it will become the current
		 * page when it's route is matched.
		 *
		 * @param {Function} Page
		 */
		bindPage: function (Page) {
			var route = Page.route;

			route.matched.add(function () {
				this.emit('routeMatched', route);
				this.setCurrentPage(Page);
			}.bind(this));
		},

		/**
		 * Replaces the current page by instantiating the page you provide. It
		 * will also emit a pageSet event. This event's payload contains a `to`
		 * property, the page you just moved to, and possibly a `from`
		 * property, the page you are moving from.
		 *
		 * @param {Function} Page
		 */
		setCurrentPage: function (Page) {
			var previousPage = this._currentPageInstance;
			var currentPage = this._currentPageInstance = new Page();

			this.emit('pageSet', {
				to: currentPage,
				from: previousPage
			});
		}
	});

	return PageRouter;
});
