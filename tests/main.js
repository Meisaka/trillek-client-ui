require.config({
	baseUrl: '../src',
	paths: {
		specs: '../tests/specs'
	}
});

(function () {
	'use strict';

	var bootJasmine = window.onload;
	window.onload = null;

	require([
		'specs/controllers/MainMenuController.spec',
		'specs/services/gameBridge.spec',
		'specs/views/main-menu.spec'
	], function () {
		bootJasmine();
	});
}());