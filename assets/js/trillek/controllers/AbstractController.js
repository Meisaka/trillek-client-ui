define([
	'stapes',
	'lodash'
], function (Stapes, _) {
	/**
	 * @class
	 */
	var AbstractController = Stapes.subclass(/** @lends AbstractController.prototype */ {
		/**
		 * Renders all views stored within the controller. Sends the result out
		 * through the renderComplete event.
		 *
		 * @abstract
		 */
		renderAll: _.noop
	});

	return AbstractController;
});
