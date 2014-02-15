require.config({
	paths: {
		text: '../bower_components/requirejs-text/text',
		almond: '../bower_components/almond/almond',
		lodash: '../bower_components/lodash/dist/lodash',
		angular: '../bower_components/angular/angular',
		angularRoute: '../bower_components/angular-route/angular-route',
		angularCookies: '../bower_components/angular-cookies/angular-cookies',
		angularTranslate: '../bower_components/angular-translate/angular-translate',
		angularTranslateStorageCookie: '../bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie',
		angularTranslateStorageLocal: '../bower_components/angular-translate-storage-local/angular-translate-storage-local',
		angularTranslateHandlerLog: '../bower_components/angular-translate-handler-log/angular-translate-handler-log',
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
		angularCookies: {
			deps: ['angular']
		},
		angularTranslate: {
			deps: ['angular']
		},
		angularTranslateStorageCookie: {
			deps: ['angularTranslate']
		},
		angularTranslateStorageLocal: {
			deps: ['angularTranslateStorageCookie']
		},
		angularTranslateHandlerLog: {
			deps: ['angularTranslate']
		},
		angularMocks: {
			deps: ['angular'],
			exports: 'angular.mock'
		}
	}
});
