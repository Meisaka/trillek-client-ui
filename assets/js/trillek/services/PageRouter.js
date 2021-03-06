define([
	'lodash',
	'stapes',
	'crossroads',
	'hasher'
], function (_, Stapes, crossroads, hasher) {
	var PageRouter = Stapes.subclass(/** @lends PageRouter.prototype */ {
		/**
		 * Thin wrapper around the crossroads and hasher libraries. Allows for easy
		 * initialisation and mapping of pages to routes.
		 *
		 * @constructs
		 */
		constructor: function () {
			this._crossroads = crossroads.create();
		},

		/**
		 * Initialises the hasher module and hooks it into crossroads. On
		 * initialisation, the hasher will check the hash for the first time.
		 */
		initialiseHasher: function () {
			var parseRoute = _.bind(this.parseRoute, this);
			hasher.initialized.add(parseRoute);
			hasher.changed.add(parseRoute);
			hasher.init();
		},

		/**
		 * Delegates the route to crossroads for parsing.
		 *
		 * @param {String} route
		 */
		parseRoute: function (route) {
			this._crossroads.parse(route);
		},

		/**
		 * Updates the current hash value using the pages interpolated route.
		 *
		 * @param {Function} Page
		 * @param {Object} [replacements] Optional values to inject into the route.
		 */
		setHashUsingPage: function (Page, replacements) {
			var hash = this.getHashForPage(Page, replacements);
			hasher.setHash(hash);
		},

		/**
		 * Builds the hash string for a page class using an optional object of
		 * replacements.
		 *
		 * @param {Function} Page
		 * @return {String} The hash string for the page class.
		 */
		getHashForPage: function (Page, replacements) {
			var route = this.getRouteFromPage(Page);
			var hash = route.interpolate(replacements);
			return hash;
		},

		/**
		 * Binds the page's route.matched signal to setCurrentPage and the
		 * routeMatched event. After binding a page it will become the current
		 * page when it's route is matched.
		 *
		 * @param {Function} Page
		 */
		bindPage: function (Page) {
			var route = this.getRouteFromPage(Page);

			route.matched.add(_.bind(function () {
				this.emit('routeMatched', route);
				this.setCurrentPage(Page);
			}, this));
		},

		/**
		 * Fetches the route object from a page in the appropriate way.
		 *
		 * @param {Function} Page
		 * @return {Object}
		 */
		getRouteFromPage: function (Page) {
			return Page.getRoute(this._crossroads);
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
