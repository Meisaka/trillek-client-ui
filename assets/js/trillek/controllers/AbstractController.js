define([
	'stapes',
	'lodash'
], function (Stapes, _) {
	/**
	 * @class
	 */
	var AbstractController = Stapes.subclass(/** @lends AbstractController.prototype */ {
		/**
		 * Renders the main view stored within the controller. Sends the result
		 * out through the renderComplete event.
		 *
		 * Passes the models object (this._models) to the main view on render.
		 */
		renderAll: function () {
			var models = this._models;
			var view = this._view;
			var result;

			if (view) {
				result = view.render(models);
			}

			this.emit('renderComplete', result);
		}
	});

	return AbstractController;
});
