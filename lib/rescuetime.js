"use strict"

var Q = require('q')
var RescuetimeError = require('./RescuetimeError')
var _ = require('lodash');
var qs = require('qs')
var request = require('request')
var debug = require('debug')('rescuetime.js')
var moment = require('moment')

// Right now we only have one endpoint
var defaultOptions = {
    endpoint: 'https://www.rescuetime.com/'
};

/**
 * Expose `defaultOptions` for the library so that this is changable.
 */
Rescuetime.defaultOptions = defaultOptions;

/**
 * Rescuetime constructor.
 *
 * @param {String} apiKey - your api key
 * @param {Object} options - an options object
 *
 * @api public
 */
function Rescuetime(apiKey, options) {

    // The api key is required
    if (!apiKey) {
        throw new RescuetimeError('Invalid API Key: ' + apiKey);
    }

    // Copy over the relavant data
    this.apiKey = apiKey;

    // Extend the defaults
    this.options = _.defaults(options || {}, Rescuetime.defaultOptions);

    // Contruct the endpoint with the correct auth from the appId and apiKey
    this.endpoint = this.options.endpoint;
}


/**
 * Helper method to create an instance easily
 *
 * Enables use like this:
 *
 *     `var rescuetime = require('rescuetime.js').create("your_API_key");`
 *
 * @param {String} apiKey - your api key
 * @param {Object} options - an options object
 * @api public
 */
Rescuetime.create = function (apiKey, options) {
    return new Rescuetime(apiKey, options);
};


/**
 * The main method that makes all the requests.
 * This method deals with the rescuetime api and can be used to make requests
 *
 * @api public
 */
Rescuetime.prototype.request = function (method, path, parameters, callback) {
    debug('Requesting [%s] %s with data %o', method, this.endpoint + path, parameters);

    var url = this.endpoint + path;

    var requestOptions = {
        method: method,
        url:    url
    };

    // set the api key
    parameters.key = this.apiKey;
    parameters.format = 'json';

    requestOptions.qs = parameters;
    requestOptions.headers = {
        'Accept': 'application/json'
    };


    // create a promise to return
    var deferred = Q.defer();

    request(requestOptions, function (err, res, body) {

        if (err) {
            // Reject the promise
            return deferred.reject(err);
        }

        // Try to parse the data
        var parsed;
        if (body) {
            debug('Recieved response %s', body);

            try {
                parsed = JSON.parse(body);


                if (parsed && (parsed.error || parsed.errors)) {
                    err = new RescuetimeError(body);

                    // Reject the promise
                    return deferred.reject(err);
                }
            } catch (exception) {
                // Reject the promise
                return deferred.reject(exception);
            }
        }

        // Resolve the promise
        return deferred.resolve(parsed || body);
    });

    // Return the promise and promisify any callback provided
    return deferred.promise.nodeify(callback);
};

Rescuetime.prototype.getTodaysTotalProductiveTime = function (callback) {

    var options = {
        pv: 'rank',
        rs: 'minute',
        rb: moment().format('YYYY-MM-DD'),
        rk: 'productivity'
    }

    return this.request('GET', 'anapi/data', options, callback);
};

// expose this lib yo
module.exports = Rescuetime;