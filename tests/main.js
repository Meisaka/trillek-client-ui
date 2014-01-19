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
		'specs/controllers/SelectLanguageController.spec',

		'specs/views/main-menu.spec',
		'specs/views/select-language.spec',

		'specs/services/gameBridge.spec'
	], function () {
		bootJasmine();
	});
}());