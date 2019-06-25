'use strict';

const assert = require('assert');

const SlsApiEdit = require('../lib/sls-api-edit');

describe('SlsApiEdit', () => {

	describe('apiMethod getter', () => {

		it('Should throw when it\'s not overriden', () => {
			assert.throws(() => SlsApiEdit.apiMethod, {
				message: 'apiMethod getter not implemented'
			});
		});
	});
});
