define(function (require) {
	var config = require('trillek/config');

	function MainMenuController($scope, gameBridge) {
		$scope.play = gameBridge.play;
		$scope.quit = gameBridge.quit;
	}

	MainMenuController.$inject = ['$scope', 'gameBridge'];

	return MainMenuController;
});
