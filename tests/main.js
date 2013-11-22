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
	'tests/PageRouter',
	'tests/views/AbstractView'
], function (config) {
	mocha.run();
});
