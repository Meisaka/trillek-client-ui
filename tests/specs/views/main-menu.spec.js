define(function (require) {
	'use strict';

	var mainMenu = require('text!trillek/views/main-menu.html');
	var angular = require('angular');
	var mock = require('angularMocks');
	var _ = require('lodash');

	describe('trillek/views/main-menu', function () {
		var dom;
		var scope;
		var menuItems;

		beforeEach(mock.inject(function ($compile, $rootScope) {
			scope = $rootScope;
			dom = $compile(angular.element(mainMenu))($rootScope);
			scope.$digest();
			menuItems = _.map(dom[0].querySelectorAll('li'), function (menuItem) {
				return angular.element(menuItem)[0];
			});
		}));

		describe('given a scope with global methods', function () {
			beforeEach(function () {
				scope.play = jasmine.createSpy('play');
				scope.quit = jasmine.createSpy('quit');
			});

			it('should execute play when first item is clicked', function () {
				menuItems[0].click();
				expect(scope.play).toHaveBeenCalled();
			});

			it('should execute quit when second item is clicked', function () {
				menuItems[1].click();
				expect(scope.quit).toHaveBeenCalled();
			});
		});
	});
});
