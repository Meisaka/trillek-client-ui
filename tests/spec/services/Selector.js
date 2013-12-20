define([
	'trillek/services/Selector',
	'lodash'
], function (Selector, _) {
	suite('services/Selector', function () {
		setup(function () {
			this.selector = new Selector();
		});

		suite('#find', function () {
			test('if nothing is found, returns null', function () {
				var result = this.selector.find('foobar');
				assert.isNull(result);
			});

			test('if there is a match, returns a HTMLElement', function () {
				var result = this.selector.find('body');
				assert.instanceOf(result, HTMLElement, 'result is a HTMLElement');
			});
		});

		suite('#findAll()', function () {
			test('returns an empty array when there are no matches', function () {
				var result = this.selector.findAll('foobar');
				assert.isArray(result, 'result is an array');
				assert.lengthOf(result, 0, 'result is empty');
			});

			test('returns an array containing a HTMLElement when matched', function () {
				var result = this.selector.findAll('body');
				var first = _.first(result);
				assert.isArray(result, 'result is an array');
				assert.instanceOf(first, HTMLElement, 'first result is a HTMLElement');
			});
		});
	});
});
