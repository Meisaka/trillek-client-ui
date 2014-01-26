define(function (require) {
	'use strict';

	var angular = require('angular');
	require('angularTranslate');
	require('angularTranslateStorageLocal');

	return angular.module('trillek.i18n', ['pascalprecht.translate'])
		.config(['config', '$translateProvider', function (config, $translateProvider) {
			$translateProvider
				.preferredLanguage(config.i18n.preferredLanguage)
				.translations('en', require('./en'))
				.translations('pl', require('./pl'))
				.useLocalStorage();
		}]);
});
