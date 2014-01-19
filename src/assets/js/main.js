require([
	'angular',
	'trillek/main'
], function (angular, trillek) {
	'use strict';
	angular.bootstrap(document, [trillek.name]);
});
