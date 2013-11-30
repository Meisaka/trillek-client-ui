define([
	'trillek/pages/AbstractPage',
	'trillek/pages/SplashPage',
	'trillek/pages/HomePage'
], function (AbstractPage, SplashPage, HomePage) {
	/**
	 * This should be the entry point into the application. It will load the
	 * splash route and redirect to the home page after some time has passed.
	 *
	 * @class
	 * @augments AbstractPage
	 */
	var IndexPage = AbstractPage.subclass(/** @lends IndexPage.prototype */ {
		/**
		 * Displays the appropriate pages for the initial load.
		 */
		initialisePage: function () {
			trillek.pageRouter.setHashUsingPage(SplashPage);
			setTimeout(function () {
				trillek.pageRouter.setHashUsingPage(HomePage);
			}, 1000);
		}
	});

	IndexPage.extend(/** @lends IndexPage */ {
		/**
		 * When this route is matched, this page will be instantiated.
		 *
		 * @param {Object} crossroads The current crossroads object you should create from.
		 * @return {Object} JS-Signal route from crossroads.
		 */
		getRoute: function (crossroads) {
			this._route = this._route || crossroads.addRoute('');
			return this._route;
		}
	});

	return IndexPage;
});
