require.config({
	paths: {
		text: '../bower_components/requirejs-text/text',
		almond: '../bower_components/almond/almond',
		lodash: '../bower_components/lodash/dist/lodash',
		angular: '../bower_components/angular/angular',
		angularRoute: '../bower_components/angular-route/angular-route',
		angularTranslate: '../bower_components/angular-translate/angular-translate',
		angularMocks: '../bower_components/angular-mocks/angular-mocks',
		trillek: './assets/js/trillek'
	},
	shim: {
		angular: {
			exports: 'angular'
		},
		angularRoute: {
			deps: ['angular']
		},
		angularTranslate: {
			deps: ['angular']
		},
		angularMocks: {
			deps: ['angular'],
			exports: 'angular.mock'
		}
	}
});
