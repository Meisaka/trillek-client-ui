define(function (require) {
	'use strict';

	function gameBridgeFactory($location, config) {
		function executeGameMethod(methodName) {
			try {
				window.game[methodName]();
			}
			catch (e) {
				console.error('Could not execute game.' + methodName);
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

	gameBridgeFactory.$inject = ['$location', 'config'];

	return gameBridgeFactory;
});
