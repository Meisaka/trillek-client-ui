define([
	'stapes'
], function (Stapes) {
	/**
	 * @class
	 */
	var AbstractController = Stapes.subclass(/** @lends AbstractController.prototype */ {
		/**
		 * Renders the main view stored within the controller. Sends the result
		 * out through the renderComplete event.
		 *
		 * Passes the models object (this._models) to the main view on render.
		 *
		 * After the views have been rendered, it will execute their event
		 * binding methods.
		 */
		renderAll: function () {
			var models = this._models;
			var view = this._view;
			var result;

			if (view) {
				result = view.render(models);
				this.emit('renderComplete', result);
				view.addEventListeners();
			}
		}
	});

	return AbstractController;
});
