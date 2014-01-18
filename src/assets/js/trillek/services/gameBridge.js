define(function () {
	'use strict';

	function gameBridgeFactory($window, $location, config) {
		function executeGameMethod(methodName) {
			try {
				$window.game[methodName]();
			}
			catch (e) {
				$window.console.error('Could not execute game.' + methodName);
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

	gameBridgeFactory.$inject = ['$window', '$location', 'config'];

	return gameBridgeFactory;
});
