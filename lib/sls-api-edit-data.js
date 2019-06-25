'use strict';

const SlsApiEdit = require('./sls-api-edit');

class SlsApiEditData extends SlsApiEdit {

	static get apiMethod() {
		return 'data';
	}

}

module.exports = SlsApiEditData;
