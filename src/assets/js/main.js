require([
	'angular',
	'trillek/main'
], function (angular, trillek) {
	angular.bootstrap(document, [trillek.name]);
});
