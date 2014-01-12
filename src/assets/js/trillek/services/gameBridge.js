define(function (require) {
	var config = require('trillek/config');

	function gameBridgeFactory($location) {
		function executeGameMethod(methodName) {
			try {
				window.game[methodName]();
			}
			catch (e) {
				console.log('Could not execute game.' + methodName);
			}
		}

		return {
			play: function () {
				executeGameMethod('play');
				$location.path(config.routes.play);
			},
			quit: function () {
				executeGameMethod('quit');
			}
		};
	}

	gameBridgeFactory.$inject = ['$location'];

	return gameBridgeFactory;
});
