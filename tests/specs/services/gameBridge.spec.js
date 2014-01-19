define(function (require) {
	'use strict';

	var gameBridge = require('trillek/services/gameBridge');

	describe('trillek/services/gameBridge', function () {
		var service;
		var global;

		beforeEach(function () {
			global = {
				console: {
					error: jasmine.createSpy('error')
				},
				game: {}
			};
			service = gameBridge(global, location);
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

			it('should proxy quit to the global object version', function () {
				service.quit();
				expect(global.game.quit).toHaveBeenCalled();
			});
		});
	});
});
