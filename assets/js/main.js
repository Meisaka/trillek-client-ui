require([
	'require-config',
	'trillek/services/PageRouter'
], function (requireConfig, PageRouter) {
	var trillek = window.trillek = {
		pageRouter: new PageRouter()
	};

	trillek.pageRouter.initialiseHasher();
});
