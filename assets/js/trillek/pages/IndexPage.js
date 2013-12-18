define([
	'trillek/pages/AbstractPage',
	'trillek/pages/SplashPage',
	'trillek/pages/HomePage',
	'trillek/services'
], function (AbstractPage, SplashPage, HomePage, services) {
	/**
	 * This should be the entry point into the application. It will load the
	 * splash route and redirect to the home page after some time has passed.
	 *
	 * @class IndexPage
	 * @augments AbstractPage
	 */
	var IndexPage = AbstractPage.subclass(/** @lends IndexPage.prototype */ {
		/**
		 * Displays the appropriate pages for the initial load.
		 */
		initialisePage: function () {
			services.pageRouter.setHashUsingPage(SplashPage);
			setTimeout(function () {
				services.pageRouter.setHashUsingPage(HomePage);
			}, 3000);
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
