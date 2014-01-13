require.config({
	baseUrl: './',
	paths: {
		trillek: '../src/assets/js/trillek'
	}
});

(function () {
	var bootJasmine = window.onload;
	window.onload = null;

	require([
		'./specs/controllers/MainMenuController'
	], function () {
		bootJasmine();
	});
}());
