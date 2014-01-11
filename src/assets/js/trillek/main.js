define(function (require) {
	var angular = require('angular');
	require('angularRoute');

	var trillek = angular.module('trillek', ['ng', 'ngRoute']);

	trillek.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/main-menu', {
				template: require('text!trillek/views/main-menu.html')
			})
			.otherwise({
				redirectTo: '/main-menu'
			});
	}]);

	return trillek;
});