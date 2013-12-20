define([
	'lodash',
	'stapes',
	'qwery'
], function (_, Stapes, qwery) {
	/**
	 * Provides CSS selectors by proxying through qwery.
	 *
	 * @class
	 */
	var Selector = Stapes.subclass(/** @lends Selector.prototype */ {
		/**
		 * Searches the DOM for all elements that match the selector.
		 *
		 * @param {String} selector
		 * @return {HTMLElement[]}
		 */
		findAll: function (selector) {
			return qwery(selector);
		},

		/**
		 * Searches the DOM for the first element to match the selector.
		 * Returns null if nothing is found for the selector.
		 *
		 * @param {String} selector
		 * @return {HTMLElement|null}
		 */
		find: function (selector) {
			var results = this.findAll(selector);
			return _.first(results) || null;
		}
	});

	return Selector;
});
