"use strict";

var validator;

if (!module.loaded) {
    var Validator = require('jsonschema').Validator;
    validator = new Validator();

    // Include your schemas here, example: validator.addSchema(require('./Schema'), '/Schema');
}

module.exports = validator;
