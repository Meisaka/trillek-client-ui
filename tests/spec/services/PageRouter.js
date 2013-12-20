define([
	'crossroads',
	'trillek/services/PageRouter',
	'trillek/pages/AbstractPage'
], function (crossroads, PageRouter, AbstractPage) {
	suite('services/PageRouter', function () {
		setup(function () {
			this.pageRouter = new PageRouter();
			this.TestPage = AbstractPage.subclass();
			this.TestPage.extend({
				getRoute: function (crossroads) {
					this._route = this._route || crossroads.addRoute('foo');
					return this._route;
				}
			});
		});

		suite('#bindPage()', function () {
			test('when an added page is routed to, it dispatches an event', function () {
				var spy = sinon.spy();
				this.pageRouter.bindPage(this.TestPage);
				this.pageRouter.on('routeMatched', spy);
				this.pageRouter.parseRoute('foo');

				assert.isTrue(spy.called, 'the listener was called');
			});
		});

		suite('#setCurrentPage()', function () {
			test('setting the page instatiates an instance of the page', function () {
				var spy = sinon.spy();
				var TestPageWithInitCheck = this.TestPage.subclass({
					constructor: spy
				});
				this.pageRouter.setCurrentPage(TestPageWithInitCheck);

				assert.isTrue(spy.called, 'the page was initialised when it was set');
			});

			test('setting a page emits the pageSet event with the to property', function () {
				var spy = sinon.spy();
				this.pageRouter.on('pageSet', spy);
				this.pageRouter.setCurrentPage(this.TestPage);

				assert.instanceOf(spy.args[0][0].to, this.TestPage, 'the to property is a TestPage instance');
			});

			test('setting a page emits the pageSet event with the from property', function () {
				var spy = sinon.spy();
				var OtherTestPage = AbstractPage.subclass();

				this.pageRouter.setCurrentPage(this.TestPage);
				this.pageRouter.on('pageSet', spy);
				this.pageRouter.setCurrentPage(OtherTestPage);

				var args = spy.args[0][0];
				assert.instanceOf(args.to, OtherTestPage, 'the to property is a OtherTestPage instance');
				assert.instanceOf(args.from, this.TestPage, 'the from property is a TestPage instance');
			});
		});

		suite('#getHashForPage()', function () {
			test('can get the hash of a page', function () {
				var hash = this.pageRouter.getHashForPage(this.TestPage);
				assert.strictEqual(hash, 'foo', 'hash was interpolated correctly');
			});
		});

		suite('#getRouteFromPage()', function () {
			test('can fetch a route from a page', function () {
				var route = this.pageRouter.getRouteFromPage(this.TestPage);
				var expected = 'foo';
				var interpolated = route.interpolate();
				assert.strictEqual(interpolated, expected, 'fetched the correct route');
			});

			test('can get the same route object from a page twice', function () {
				var firstRoute = this.pageRouter.getRouteFromPage(this.TestPage);
				var secondRoute = this.pageRouter.getRouteFromPage(this.TestPage);
				assert.strictEqual(firstRoute, secondRoute, 'fetched the same route twice');
			});
		});
	});
});
