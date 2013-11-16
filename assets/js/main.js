require.config({
	paths: {
		mustache: '../../bower_components/mustache/mustache',
		text: '../../bower_components/requirejs-text/text',
		stache: '../../bower_components/requirejs-mustache/stache',
		stapes: '../../bower_components/stapes/stapes',
		crossroads: '../../bower_components/crossroads.js/dist/crossroads'
	},
	stache: {
		extension: '.mustache',
		path: '../templates/'
	}
});

require(function () {});
