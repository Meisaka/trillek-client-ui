require.config({
	baseUrl: './assets/js',
	paths: {
		text: '../../bower_components/requirejs-text/text',
		i18n: '../../bower_components/requirejs-i18n/i18n',
		stapes: '../../bower_components/stapes/stapes',
		crossroads: '../../bower_components/crossroads.js/dist/crossroads',
		hasher: '../../bower_components/hasher/dist/js/hasher',
		signals: '../../bower_components/js-signals/dist/signals',
		qwery: '../../bower_components/qwery/qwery',
		lodash: '../../bower_components/lodash/dist/lodash',
		tmpl: '../../bower_components/lodash-template-loader/loader'
	},
	lodashLoader: {
		root: '../assets/templates'
	}
});
