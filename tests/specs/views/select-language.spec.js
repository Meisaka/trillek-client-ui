define(function (require) {
	'use strict';

	var selectLanguage = require('text!trillek/views/select-language.html');
	var angular = require('angular');
	var mock = require('angularMocks');

	xdescribe('trillek/views/select-language', function () {
		var dom;
		var scope;

		beforeEach(mock.inject(function ($compile, $rootScope) {
			scope = $rootScope;
			dom = $compile(angular.element(selectLanguage))($rootScope);
			scope.$digest();
		}));
	});
});
