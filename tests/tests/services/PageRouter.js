define([
	'crossroads',
	'trillek/services/PageRouter',
	'trillek/pages/AbstractPage'
], function (crossroads, PageRouter, AbstractPage) {
	suite('services/PageRouter', function () {
		setup(function () {
			this.router = crossroads.create();
			this.pageRouter = new PageRouter();
			this.TestPage = AbstractPage.subclass();
			this.TestPage.extend({
				route: this.router.addRoute('foo')
			});
		});

		suite('#bindPage()', function () {
			test('when an added page is routed to, it dispatches an event', function () {
				var routed = false;
				this.pageRouter.bindPage(this.TestPage);
				this.pageRouter.on('routeMatched', function () {
					routed = true;
				});
				this.router.parse('foo');
				assert.isTrue(routed, 'the routed variable was swapped to true when the PageRouter event fired');
			});

			test('the event that is fired when we have a match passes the route', function () {
				var routed = false;
				this.pageRouter.bindPage(this.TestPage);
				this.pageRouter.on('routeMatched', function (route) {
					routed = true;
					assert.strictEqual(route, this.TestPage.route, 'the correct route was passed');
				}.bind(this));
				this.router.parse('foo');
				assert.isTrue(routed, 'the routed variable was swapped to true when the PageRouter event fired');
			});
		});

		suite('#setCurrentPage()', function () {
			test('setting the page instatiates an instance of the page', function () {
				var initialised = false;
				var TestPageWithInitCheck = this.TestPage.subclass({
					constructor: function () {
						initialised = true;
					}
				});
				this.pageRouter.setCurrentPage(TestPageWithInitCheck);
				assert.isTrue(initialised, 'the page was initialised when it was set');
			});

			test('setting a page emits the pageSet event with the to property', function () {
				var emitted = false;
				this.pageRouter.on('pageSet', function (payload) {
					emitted = true;
					assert.instanceOf(payload.to, this.TestPage, 'the to property is a TestPage instance');
				}.bind(this));
				this.pageRouter.setCurrentPage(this.TestPage);
				assert.isTrue(emitted, 'the event was emitted and set the flag');
			});

			test('setting a page emits the pageSet event with the from property', function () {
				var emitted = false;
				var OtherTestPage = AbstractPage.subclass();

				this.pageRouter.setCurrentPage(this.TestPage);
				this.pageRouter.on('pageSet', function (payload) {
					emitted = true;
					assert.instanceOf(payload.to, OtherTestPage, 'the to property is a OtherTestPage instance');
					assert.instanceOf(payload.from, this.TestPage, 'the from property is a TestPage instance');
				}.bind(this));
				this.pageRouter.setCurrentPage(OtherTestPage);

				assert.isTrue(emitted, 'the event was emitted and set the flag');
			});
		});
	});
});
