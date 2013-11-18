require.config({
	baseUrl: '../assets/js/',
	paths: {
		test: '../../tests/src'
	}
});

mocha.setup('tdd');
mocha.reporter('html');
window.assert = chai.assert;

require([
	'require-config'
], function () {
	mocha.run();
});
