define([
	'trillek/services/PageRouter',
	'trillek/services/PageDisplayManager',
	'trillek/services/GameBridge',
	'trillek/services/Selector'
], function (PageRouter, PageDisplayManager, GameBridge, Selector) {
	var pageRouter = new PageRouter();

	return {
		pageRouter: pageRouter,
		pageDisplayManager: new PageDisplayManager(pageRouter),
		gameBridge: new GameBridge(),
		selector: new Selector()
	};
});
