define([
	'trillek/services',
	'trillek/services/PageRouter',
	'trillek/services/PageDisplayManager',
	'trillek/services/GameBridge',
	'trillek/services/Selector'
], function (services, PageRouter, PageDisplayManager, GameBridge, Selector) {
	suite('services', function () {
		suite('#pageRouter', function () {
			test('has a PageRouter', function () {
				assert.instanceOf(services.pageRouter, PageRouter, 'has a PageRouter');
			});
		});

		suite('#pageDisplayManager', function () {
			test('has a PageDisplayManager', function () {
				assert.instanceOf(services.pageDisplayManager, PageDisplayManager, 'has a PageDisplayManager');
			});
		});

		suite('#gameBridge', function () {
			test('has a GameBridge', function () {
				assert.instanceOf(services.gameBridge, GameBridge, 'has a GameBridge');
			});
		});

		suite('#selector', function () {
			test('has a Selector', function () {
				assert.instanceOf(services.selector, Selector, 'has a Selector');
			});
		});
	});
});
