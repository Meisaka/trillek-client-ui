define(function () {
	'use strict';

	/**
	 * The game bridge is used to talk to the global game object.
	 *
	 * @function gameBridgeFactory
	 * @param {Object} $window
	 * @param {Object} $location
	 * @param {Object} config
	 */
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
