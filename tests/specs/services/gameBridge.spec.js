define(function (require) {
	'use strict';

	var gameBridge = require('trillek/services/gameBridge');

	describe('trillek/services/gameBridge', function () {
		var service;
		var global;
		var location;
		var config;

		beforeEach(function () {
			global = {
				console: {
					error: jasmine.createSpy('error')
				},
				game: {}
			};
			location = {
				path: jasmine.createSpy('path')
			};
			config = {
				routes: {
					play: 'PLAY_ROUTE'
				}
			};
			service = gameBridge(global, location, config);
		});

		it('should log an error when the method does not exist', function () {
			service.play();
			expect(global.console.error).toHaveBeenCalledWith(jasmine.any(String));
		});

		describe('given a global with all the methods', function () {
			beforeEach(function () {
				global.game.play = jasmine.createSpy('play');
				global.game.quit = jasmine.createSpy('quit');
			});

			it('should proxy play to the global object version', function () {
				service.play();
				expect(global.game.play).toHaveBeenCalled();
			});

			it('should try to load the play route when calling play', function () {
				service.play();
				expect(location.path).toHaveBeenCalledWith(config.routes.play);
			});

			it('should proxy quit to the global object version', function () {
				service.quit();
				expect(global.game.quit).toHaveBeenCalled();
			});
		});
	});
});
