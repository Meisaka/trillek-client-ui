define(function (require) {
	'use strict';

	var angular = require('angular');
	require('angularRoute');

	return angular.module('trillek.routes', ['ngRoute'])
		.config(['config', '$routeProvider', function (config, $routeProvider) {
			$routeProvider
				.when(config.routes.mainMenu, {
					template: require('text!trillek/views/main-menu.html'),
					controller: 'MainMenuController'
				})
				.when(config.routes.selectLanguage, {
					template: require('text!trillek/views/select-language.html'),
					controller: 'SelectLanguageController'
				})
				.when(config.routes.play, {
					template: require('text!trillek/views/play.html')
				})
				.otherwise({
					redirectTo: config.routes.mainMenu
				});
		}]);
});
