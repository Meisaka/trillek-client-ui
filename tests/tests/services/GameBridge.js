define([
	'trillek/services/GameBridge'
], function (GameBridge) {
	suite('services/GameBridge', function () {
		setup(function () {
			this.bridge = new GameBridge();
		});
	});
});
