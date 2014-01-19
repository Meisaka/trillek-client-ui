define(function (require) {
	'use strict';

	var angular = require('angular');

	return angular.module('trillek.config', [])
		.constant('config', require('./default'));
});
