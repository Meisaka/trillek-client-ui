define(function (require) {
	var config = require('trillek/config');
	var angular = require('angular');
	require('angularRoute');
	require('angularTranslate');

	var trillek = angular.module('trillek', [
		'ng',
		'ngRoute',
		'pascalprecht.translate'
	]);

	trillek
		.controller('MainMenuController', require('trillek/controllers/MainMenuController'))
		.factory('gameBridge', require('trillek/services/gameBridge'));

	trillek.config(['$routeProvider', '$translateProvider', function ($routeProvider, $translateProvider) {
		$routeProvider
			.when(config.routes.mainMenu, {
				template: require('text!trillek/views/main-menu.html'),
				controller: 'MainMenuController'
			})
			.when(config.routes.play, {
				template: require('text!trillek/views/play.html')
			})
			.otherwise({
				redirectTo: config.routes.mainMenu
			});

		$translateProvider
			.translations('en', require('trillek/i18n/en'))
			.preferredLanguage(config.i18n.preferredLanguage);
	}]);

	return trillek;
});