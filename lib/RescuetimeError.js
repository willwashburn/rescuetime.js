/**
 * Module dependencies.
 */
var util = require('util');

/**
 * `AbstractError` error.
 *
 * @api private
 */
function AbstractError(message, constr) {
    Error.apply(this, arguments);
    Error.captureStackTrace(this, constr || this);

    this.name = 'AbstractError';
    this.message = message;
}

/**
 * Inherit from `Error`.
 */
util.inherits(AbstractError, Error);

/**
 * `RescuetimeError` error.
 *
 * @api private
 */
function RescuetimeError(message) {
    AbstractError.apply(this, arguments);
    this.name = 'RescuetimeError';
    this.message = message;
}

/**
 * Inherit from `AbstractError`.
 */
util.inherits(RescuetimeError, AbstractError);


/**
 * Expose `RescuetimeError`.
 */
module.exports = RescuetimeError;