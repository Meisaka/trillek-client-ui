define([
	'utils/query'
], function (query) {
	suite('utils', function () {
		suite('query', function () {
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

			suite('()', function () {
				test('can find a single element by selector', function () {
					var match = query('div.some-class');
					assert.instanceOf(match, HTMLElement, 'the match was a HTML element');
				});
			});

			suite('.id()', function () {
				test('can find an element by ID', function () {
					var match = query.id('some-id');
					assert.instanceOf(match, HTMLElement, 'the match was a HTML element');
				})
			});

			suite('.all()', function () {
				test('can find an element by selector and return it in a list', function () {
					var matches = query.all('div.some-class');
					assert.instanceOf(matches, NodeList, 'the search returned a NodeList');
					assert.lengthOf(matches, 1, 'the NodeList contained one item');
				});
			});
		});
	});
});