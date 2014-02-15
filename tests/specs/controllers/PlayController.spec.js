define(function (require) {
	'use strict';

	var PlayController = require('trillek/controllers/PlayController');

	describe('trillek/controllers/PlayController', function () {
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
					mainMenu: 'MAIN_MENU_ROUTE'
				}
			};
			bridge = {
				resume: jasmine.createSpy('resume'),
				stop: jasmine.createSpy('stop'),
				quit: jasmine.createSpy('quit')
			};
			controller = new PlayController(scope, bridge, location, config);
		});

		it('proxies the resume function to the game', function () {
			scope.resume();
			expect(bridge.resume).toHaveBeenCalled();
		});

		it('proxies the quit function to the game', function () {
			scope.quit();
			expect(bridge.quit).toHaveBeenCalled();
		});

		describe('when stop is called', function () {
			beforeEach(function () {
				scope.stop();
			});

			it('proxies the stop function to the game', function () {
				expect(bridge.stop).toHaveBeenCalled();
			});

			it('tries to redirect to the main menu on stop', function () {
				expect(location.path).toHaveBeenCalledWith(config.routes.mainMenu);
			});
		});
	});
});
