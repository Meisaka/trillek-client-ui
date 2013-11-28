require.config({
	paths: {
		trillek: '../assets/js/trillek',
	}
});

mocha.setup('tdd');
mocha.reporter('html');
window.assert = chai.assert;

define([
	'../assets/js/require-config',

	'tests/pages/all',
	'tests/pages/AbstractPage',
	'tests/pages/IndexPage',
	'tests/pages/SplashPage',
	'tests/pages/HomePage',

	'tests/services/PageRouter',
	'tests/services/PageDisplayManager',

	'tests/controllers/AbstractController',
	'tests/controllers/SplashPageController',
	'tests/controllers/HomePageController',

	'tests/views/AbstractView',
	'tests/views/SplashPageView',
	'tests/views/HomePageView',

	'tests/models/AbstractModel'
], function (config) {
	mocha.run();
});
