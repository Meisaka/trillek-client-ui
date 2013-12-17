require([
	'trillek/services',
	'trillek/pages/all'
], function (services, allPages) {
	var allPagesLength = allPages.length;
	var i;

	for (i = 0; i < allPagesLength; i++) {
		services.pageRouter.bindPage(allPages[i]);
	}

	services.pageRouter.initialiseHasher();
});
