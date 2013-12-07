require([
	'require-config',
	'trillek/services/PageRouter',
	'trillek/services/PageDisplayManager',
	'trillek/services/GameBridge',
	'trillek/pages/all'
], function (requireConfig, PageRouter, PageDisplayManager, GameBridge, allPages) {
	var pageRouter = new PageRouter();
	var pageDisplayManager = new PageDisplayManager(pageRouter);
	var gameBridge = new GameBridge();
	var allPagesLength = allPages.length;
	var i;

	for (i = 0; i < allPagesLength; i++) {
		pageRouter.bindPage(allPages[i]);
	}

	window.trillek = {
		pageRouter: pageRouter,
		pageDisplayManager: pageDisplayManager,
		gameBridge: gameBridge
	};

	pageRouter.initialiseHasher();
});
