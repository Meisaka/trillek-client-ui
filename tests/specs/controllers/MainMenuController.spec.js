define(function (require) {
	'use strict';

	var MainMenuController = require('trillek/controllers/MainMenuController');

	describe('trillek/controllers/MainMenuController', function () {
		var controller;
		var scope;
		var bridge;

		beforeEach(function () {
			scope = {};
			bridge = {
				play: jasmine.createSpy('play'),
				quit: jasmine.createSpy('quit')
			};
			controller = new MainMenuController(scope, bridge);
		});

		it('should proxy the play method to the game bridge', function () {
			scope.play();
			expect(bridge.play).toHaveBeenCalled();
		});

		it('should proxy the quit method to the game bridge', function () {
			scope.quit();
			expect(bridge.quit).toHaveBeenCalled();
		});
	});
});
