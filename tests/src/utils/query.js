define([
	'utils/query'
], function (query) {
	suite('utils/query', function () {
		setup(function () {
			this.testElement = document.createElement('div');
			this.testElement.id = 'some-id';
			this.testElement.classList.add('some-class');
			document.body.appendChild(this.testElement);
		});

		teardown(function () {
			document.body.removeChild(this.testElement);
		});

		suite('()', function () {
			test('can find a single element by selector', function () {
				var match = query('div.some-class');
				assert.instanceOf(match, HTMLElement, 'the match was a HTML element');
				assert.strictEqual(match, this.testElement, 'the match is the correct element');
			});
		});

		suite('.id()', function () {
			test('can find an element by ID', function () {
				var match = query.id('some-id');
				assert.instanceOf(match, HTMLElement, 'the match was a HTML element');
				assert.strictEqual(match, this.testElement, 'the match is the correct element');
			})
		});

		suite('.all()', function () {
			test('can find an element by selector and return it in a list', function () {
				var matches = query.all('div.some-class');
				assert.instanceOf(matches, NodeList, 'the search returned a NodeList');
				assert.lengthOf(matches, 1, 'the NodeList contained one item');
				assert.strictEqual(matches[0], this.testElement, 'the match is the correct element');
			});
		});
	});
});