define(function () {
	'use strict';

	/**
	 * Proxies menu item interaction through to the appropriate methods.
	 *
	 * @class MainMenuController
	 * @param {Object} $scope
	 * @param {Object} gameBridge
	 * @param {Object} $location
	 * @param {Object} config
	 */
	function MainMenuController($scope, gameBridge, $location, config) {
		$scope.quit = gameBridge.quit;
		$scope.play = function () {
			gameBridge.play();
			$location.path(config.routes.play);
		};
		$scope.selectLanguage = function () {
			$location.path(config.routes.selectLanguage);
		};
	}

	MainMenuController.$inject = ['$scope', 'gameBridge', '$location', 'config'];

	return MainMenuController;
});
