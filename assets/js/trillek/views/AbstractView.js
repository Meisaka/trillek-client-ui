define([
	'stapes',
	'lodash'
], function (Stapes, _) {
	/**
	 * Base view that all other views inherit from.
	 *
	 * @class
	 */
	var AbstractView = Stapes.subclass(/** @lends AbstractView.prototype */ {
		/**
		 * Renders the view to a string, probably with a template, using the
		 * optionally provided model.
		 *
		 * @abstract
		 * @param {Object} [model] Optional source data object to be used when rendering the view.
		 * @return {String} String representation of the view based on the model.
		 */
		render: _.noop,

		/**
		 * Attaches all event listeners to the newly created DOM elements. This
		 * is called after render has finished and the new HTML has been
		 * injected into the page.
		 *
		 * @abstract
		 */
		addEventListeners: _.noop
	});

	return AbstractView;
});