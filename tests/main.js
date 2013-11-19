require.config({
	baseUrl: '../assets/js/',
	paths: {
		test: '../../tests/src'
	}
});

mocha.setup('tdd');
mocha.reporter('html');
window.assert = chai.assert;

define([
	'require-config',
	'utils/router',
	'test/utils/query'
], function (config, router) {
	router.start();
	mocha.run();
});
