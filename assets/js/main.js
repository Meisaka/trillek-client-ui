require([
	'require-config',
	'trillek/services/PageRouter',
	'trillek/services/PageDisplayManager',
	'trillek/pages/all'
], function (requireConfig, PageRouter, PageDisplayManager, allPages) {
	var pageRouter = new PageRouter();
	var pageDisplayManager = new PageDisplayManager(pageRouter);
	var allPagesLength = allPages.length;
	var i;

	for (i = 0; i < allPagesLength; i++) {
		pageRouter.bindPage(allPages[i]);
	}

	window.trillek = {
		pageRouter: pageRouter,
		pageDisplayManager: pageDisplayManager
	};

	pageRouter.initialiseHasher();
});
