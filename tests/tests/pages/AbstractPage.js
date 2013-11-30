define([
	'trillek/pages/AbstractPage'
], function (AbstractPage) {
	suite('pages/AbstractPage', function () {
		setup(function () {
			this.page = new AbstractPage();
			this.container = document.createElement('div');
		});

		suite('getRoute()', function () {
			test('static route in AbstractPage should be a noop', function () {
				assert.isUndefined(AbstractPage.getRoute(), 'the route creator is a noop function');
			});
		});

		suite('#setContainerElement()', function () {
			test('setting a container element dispatches an event with the element within it', function () {
				var expected = this.container;
				var spy = sinon.spy();
				this.page.on('containerElementSet', spy);
				this.page.setContainerElement(expected);

				assert.strictEqual(spy.args[0][0], expected, 'got the element back out of the page through the event');
			});
		});

		suite('#setContainerElementHTML()', function () {
			test('can set the HTML of the container', function () {
				var expected = '<p>Test</p>';
				this.page.setContainerElement(this.container);
				this.page.setContainerElementHTML(expected);
				assert.strictEqual(this.container.innerHTML, expected, 'HTML was set correctly');
			});
		});

		suite('#initialisePage()', function () {
			test('method should be a noop', function () {
				assert.isUndefined(this.page.initialisePage(), 'the function is a noop');
			});
		});
	});
});
