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
	'test/utils/query'
], function () {
	mocha.run();
});
