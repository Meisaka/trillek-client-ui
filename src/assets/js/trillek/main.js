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

	trillek.config(['$routeProvider', '$translateProvider', function ($routeProvider, $translateProvider) {
		$routeProvider
			.when('/main-menu', {
				template: require('text!trillek/views/main-menu.html')
			})
			.otherwise({
				redirectTo: '/main-menu'
			});

		$translateProvider
			.translations('en', require('trillek/i18n/en'))
			.preferredLanguage(config.i18n.preferredLanguage);
	}]);

	return trillek;
});