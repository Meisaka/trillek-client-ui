require.config({
	baseUrl: './',
	paths: {
		trillek: '../assets/js/trillek'
	},
	lodashLoader: {
		root: '../assets/templates'
	}
});

mocha.setup('tdd');
mocha.reporter('html');
window.assert = chai.assert;

require([
	'tests/services',
	'tests/services/PageRouter',
	'tests/services/PageDisplayManager',
	'tests/services/GameBridge',

	'tests/pages/all',
	'tests/pages/AbstractPage',
	'tests/pages/IndexPage',
	'tests/pages/SplashPage',
	'tests/pages/HomePage',
	'tests/pages/GamePage',

	'tests/controllers/AbstractController',
	'tests/controllers/SplashPageController',
	'tests/controllers/HomePageController',
	'tests/controllers/GamePageController',

	'tests/views/AbstractView',
	'tests/views/SplashPageView',
	'tests/views/HomePageView',
	'tests/views/GamePageView',

	'tests/models/AbstractModel'
], function (config) {
	mocha.run();
});
