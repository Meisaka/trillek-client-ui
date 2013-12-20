require([
	'lodash',
	'trillek/services',
	'trillek/pages/all'
], function (_, services, allPages) {
	_.forEach(allPages, services.pageRouter.bindPage, services.pageRouter);
	services.pageRouter.initialiseHasher();
});
