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
				var spy = sinon.spy();
				this.pageRouter.bindPage(this.TestPage);
				this.pageRouter.on('routeMatched', spy);
				this.router.parse('foo');

				assert.isTrue(spy.called, 'the listener was called');
			});

			test('the event that is fired when we have a match passes the route', function () {
				var spy = sinon.spy();
				this.pageRouter.bindPage(this.TestPage);
				this.pageRouter.on('routeMatched', spy);
				this.router.parse('foo');

				assert.strictEqual(spy.args[0][0], this.TestPage.route, 'the correct route was passed');
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
	});
});
