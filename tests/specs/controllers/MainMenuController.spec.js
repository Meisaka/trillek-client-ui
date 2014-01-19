define(function (require) {
	'use strict';

	var MainMenuController = require('trillek/controllers/MainMenuController');

	describe('trillek/controllers/MainMenuController', function () {
		var controller;
		var scope;
		var bridge;
		var location;
		var config;

		beforeEach(function () {
			scope = {};
			location = {
				path: jasmine.createSpy('path')
			};
			config = {
				routes: {
					play: 'PLAY_ROUTE',
					selectLanguage: 'SELECT_LANGUAGE_ROUTE'
				}
			};
			bridge = {
				play: jasmine.createSpy('play'),
				quit: jasmine.createSpy('quit')
			};
			controller = new MainMenuController(scope, bridge, location, config);
		});

		it('should proxy the play method to the game bridge', function () {
			scope.play();
			expect(bridge.play).toHaveBeenCalled();
		});

		it('should try to load the play route when calling play', function () {
			scope.play();
			expect(location.path).toHaveBeenCalledWith(config.routes.play);
		});

		it('should proxy the quit method to the game bridge', function () {
			scope.quit();
			expect(bridge.quit).toHaveBeenCalled();
		});

		it('should attempt to load the language selection page when requested', function () {
			scope.selectLanguage();
			expect(location.path).toHaveBeenCalledWith(config.routes.selectLanguage);
		});
	});
});
