define(function () {
	'use strict';

	/**
	 * @class PlayController
	 * @param {Object} $scope
	 * @param {Object} gameBridge
	 * @param {Object} $location
	 * @param {Object} config
	 */
	function PlayController($scope, gameBridge, $location, config) {
		$scope.resume = gameBridge.resume;
		$scope.quit = gameBridge.quit;
		$scope.stop = function () {
			gameBridge.stop();
			$location.path(config.routes.mainMenu);
		};
	}

	PlayController.$inject = ['$scope', 'gameBridge', '$location', 'config'];

	return PlayController;
});
