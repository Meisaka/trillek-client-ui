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
	'spec/services',
	'spec/services/PageRouter',
	'spec/services/PageDisplayManager',
	'spec/services/GameBridge',
	'spec/services/Selector',

	'spec/pages/all',
	'spec/pages/AbstractPage',
	'spec/pages/IndexPage',
	'spec/pages/SplashPage',
	'spec/pages/HomePage',
	'spec/pages/GamePage',

	'spec/controllers/AbstractController',
	'spec/controllers/SplashPageController',
	'spec/controllers/HomePageController',
	'spec/controllers/GamePageController',

	'spec/views/AbstractView',
	'spec/views/SplashPageView',
	'spec/views/HomePageView',
	'spec/views/GamePageView',

	'spec/models/AbstractModel'
], function (config) {
	mocha.run();
});
