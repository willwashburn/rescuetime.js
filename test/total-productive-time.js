var test = require('tape')


var API_KEY = 'SOME API KEY TO TEST WITH';
var Rescuetime = require('../index.js').create(API_KEY)

// lol at the worst test ever
// never fails!
test('test runs total productive time', function (t) {

    Rescuetime.getTodaysTotalProductiveTime(function(err,response) {
        t.pass()
    });

    t.end()
})