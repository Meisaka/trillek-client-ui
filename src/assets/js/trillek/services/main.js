define(function (require) {
	'use strict';

	var angular = require('angular');

	return angular.module('trillek.services', [])
		.factory('gameBridge', require('./gameBridge'));
});
