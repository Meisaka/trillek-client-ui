require([
	'require-config',
	'trillek/PageRouter'
], function (requireConfig, PageRouter) {
	var trillek = window.trillek = {
		pageRouter: new PageRouter()
	};

	trillek.pageRouter.initialiseHasher();
});
