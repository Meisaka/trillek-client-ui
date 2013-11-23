define([
	'trillek/services/PageDisplayManager',
	'trillek/services/PageRouter',
	'trillek/pages/AbstractPage'
], function (PageDisplayManager, PageRouter, AbstractPage) {
	suite('services/PageDisplayManager', function () {
		setup(function () {
			this.pageRouter = new PageRouter();
			this.pageDisplayManager = new PageDisplayManager(this.pageRouter);
			this.TestPage = AbstractPage.subclass();
		});

		suite('#setCurrentPage()', function () {
			test('when a page is set, the page has a container element passed to it', function () {
				var result;
				var page = new this.TestPage();

				page.on('containerElementSet', function (container) {
					result = container;
				});

				this.pageDisplayManager.setCurrentPage(page);
				assert.instanceOf(result, HTMLElement, 'the page was passed a HTML element');
			});
		});
	});
});
