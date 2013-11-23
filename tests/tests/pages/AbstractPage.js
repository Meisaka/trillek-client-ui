define([
	'trillek/pages/AbstractPage'
], function (AbstractPage) {
	suite('pages/AbstractPage', function () {
		setup(function () {
			this.page = new AbstractPage();
		});

		suite('route', function () {
			test('static route in AbstractPage should be a noop', function () {
				assert.isUndefined(AbstractPage.route(), 'the route is a noop function');
			});
		});

		suite('#setContainerElement()', function () {
			test('setting a container element dispatches an event with the element within it', function () {
				var result;
				var expected = document.createElement('div');
				this.page.on('containerElementSet', function (element) {
					result = element;
				});
				this.page.setContainerElement(expected);
				assert.strictEqual(result, expected, 'got the element back out of the page through the event');
			});
		});
	});
});
