require([
	'require-config',
	'trillek/services/PageRouter',
	'trillek/services/PageDisplayManager'
], function (requireConfig, PageRouter, PageDisplayManager) {
	var pageRouter = new PageRouter();
	var pageDisplayManager = new PageDisplayManager(pageRouter);

	window.trillek = {
		pageRouter: pageRouter,
		pageDisplayManager: pageDisplayManager
	};

	pageRouter.initialiseHasher();
});
