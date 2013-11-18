define([
	'utils/query'
], function (query) {
	suite('utils/query', function () {
		var testElement;

		setup(function () {
			testElement = document.createElement('div');
			testElement.id = 'some-id';
			testElement.classList.add('some-class');
			document.body.appendChild(testElement);
		});

		teardown(function () {
			document.body.removeChild(testElement);
		});

		test('can find a single element by selector', function () {
			var match = query('div.some-class');
			assert.instanceOf(match, HTMLElement, 'the match was a HTML element');
		});
	});
});