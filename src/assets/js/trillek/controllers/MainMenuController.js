define(function () {
	'use strict';

	/**
	 * Proxies menu item interaction through to the appropriate methods.
	 *
	 * @class MainMenuController
	 * @param {Object} $scope
	 * @param {Object} gameBridge
	 */
	function MainMenuController($scope, gameBridge) {
		$scope.play = gameBridge.play;
		$scope.quit = gameBridge.quit;
	}

	MainMenuController.$inject = ['$scope', 'gameBridge'];

	return MainMenuController;
});
