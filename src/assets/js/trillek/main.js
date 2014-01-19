define(function (require) {
	'use strict';

	var angular = require('angular');
	require('angularCookies');

	var trillek = angular.module('trillek', [
		'ngCookies',
		require('./config/main').name,
		require('./i18n/main').name,
		require('./services/main').name,
		require('./controllers/main').name,
		require('./routes/main').name
	]);

	return trillek;
});