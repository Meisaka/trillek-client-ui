define(function () {
	'use strict';

	/**
	 * The game bridge is used to talk to the global game object.
	 *
	 * @function gameBridgeFactory
	 * @param {Object} $window
	 */
	function gameBridgeFactory($window) {
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
			},
			quit: function () {
				executeGameMethod('quit');
			},
			resume: function () {
				executeGameMethod('resume');
			},
			stop: function () {
				executeGameMethod('stop');
			}
		};
	}

	gameBridgeFactory.$inject = ['$window'];

	return gameBridgeFactory;
});
