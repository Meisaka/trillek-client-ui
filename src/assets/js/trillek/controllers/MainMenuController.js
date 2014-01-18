define(function () {
	'use strict';

	function MainMenuController($scope, gameBridge) {
		$scope.play = gameBridge.play;
		$scope.quit = gameBridge.quit;
	}

	MainMenuController.$inject = ['$scope', 'gameBridge'];

	return MainMenuController;
});
