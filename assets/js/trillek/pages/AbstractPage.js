define([
	'stapes',
	'lodash'
], function (Stapes, _) {
	/**
	 * Base page class. A page kicks off a controller which in turn fires off
	 * to views and models. Pages contain a static value called `route` which
	 * as to be a signal object returned from crossroads.
	 *
	 * PageRouter will use this to display your pages when your route is
	 * matched.
	 *
	 * @class
	 */
	var AbstractPage = Stapes.subclass(/** @lends AbstractPage.prototype */ {
		/**
		 * Sets the new container element for the page and dispatches a
		 * containerElementSet event.
		 *
		 * @param {Element} containerElement
		 */
		setContainerElement: function (containerElement) {
			this._containerElement = containerElement;
			this.emit('containerElementSet', containerElement);
		}
	});

	AbstractPage.extend(/** @lends AbstractPage */ {
		/**
		 * On a concrete page, this should be set to your desired route signal.
		 * It will be used to instantiate the page when the route is matched.
		 *
		 * @type {Object} JS-Signal route from crossroads.
		 */
		route: _.noop
	});

	return AbstractPage;
});
