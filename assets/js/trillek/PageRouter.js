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
		}
	});

	return PageRouter;
});
