require.config({
	baseUrl: './assets/js',
	paths: {
		text: '../../../bower_components/requirejs-text/text',
		almond: '../../../bower_components/almond/almond',
		angular: '../../../bower_components/angular/angular',
		angularRoute: '../../../bower_components/angular-route/angular-route'
	},
	shim: {
		angular: {
			exports: 'angular'
		},
		angularRoute: {
			deps: ['angular']
		}
	}
});
