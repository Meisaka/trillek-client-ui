require([
	'require-config',
	'trillek/Router'
], function (requireConfig, Router) {
	var trillek = window.trillek = {
		router: new Router()
	};

	trillek.router.initialiseHasher();
});
