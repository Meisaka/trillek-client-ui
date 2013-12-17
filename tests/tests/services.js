define([
	'trillek/services',
	'trillek/services/PageRouter',
	'trillek/services/PageDisplayManager',
	'trillek/services/GameBridge'
], function (services, PageRouter, PageDisplayManager, GameBridge) {
	suite('services', function () {
		suite('#pageRouter', function () {
			test('has a PageRouter', function () {
				assert.instanceOf(services.pageRouter, PageRouter);
			});
		});

		suite('#pageDisplayManager', function () {
			test('has a PageDisplayManager', function () {
				assert.instanceOf(services.pageDisplayManager, PageDisplayManager);
			});
		});

		suite('#gameBridge', function () {
			test('has a GameBridge', function () {
				assert.instanceOf(services.gameBridge, GameBridge);
			});
		});
	});
});