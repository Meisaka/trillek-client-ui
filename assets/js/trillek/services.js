define([
	'trillek/services/PageRouter',
	'trillek/services/PageDisplayManager',
	'trillek/services/GameBridge'
], function (PageRouter, PageDisplayManager, GameBridge) {
	var pageRouter = new PageRouter();

	return {
		pageRouter: pageRouter,
		pageDisplayManager: new PageDisplayManager(pageRouter),
		gameBridge: new GameBridge()
	};
});
