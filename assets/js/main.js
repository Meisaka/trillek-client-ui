require.config({
	paths: {
		mustache: '../../bower_components/mustache/mustache',
		text: '../../bower_components/requirejs-text/text',
		stache: '../../bower_components/requirejs-mustache/stache',
		maria: '../../bower_components/maria/maria-amd',
		crossroads: '../../bower_components/crossroads.js/dist/crossroads'
	},
	stache: {
		extension: '.mustache',
		path: '../templates/'
	}
});

require([
	'stache!hello'
], function (helloTemplate) {
	document.body.innerHTML = helloTemplate({
		name: 'Wolfy87'
	});
});
