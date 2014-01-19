define(function (require) {
	'use strict';

	var angular = require('angular');

	return angular.module('trillek.controllers', [])
		.controller('MainMenuController', require('./MainMenuController'))
		.controller('SelectLanguageController', require('./SelectLanguageController'));
});
