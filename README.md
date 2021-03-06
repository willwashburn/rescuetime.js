# rescuetime.js [![Build Status](https://travis-ci.org/willwashburn/rescuetime.js.svg?branch=master)](https://travis-ci.org/willwashburn/rescuetime.js)
An API client for rescuetime.com

> **Note:** This is in super alpha and really hasn't been tested or used. Feedback and PR's welcome!

## Install
```
npm install rescuetime.js
```

## Usage
You can make calls to the api like so:
> **Note:** I suggest you use [dotenv](https://www.npmjs.com/package/dotenv) to store your API key since you definitely do not want that in version control.

```js

   var Rescuetime = require('rescuetime.js').create('YOUR_API_KEY')

   var parameters = {
        pv: 'rank',
        rk: 'productivity'
    }

    Rescuetime.request('GET', 'anapi/data', parameters, function(err,response) {
         console.log(res)
    })

```

You can also use promises if that's your squeeze
```js

   var parameters = {
        pv: 'rank',
        rk: 'productivity'
    }

    Rescuetime.request('GET', 'anapi/data', parameters)
    .then(function(response) { console.log(response} )

```

The plan is to also add some helpful methods that cut to the chase.
```js

    Rescuetime.totalProductiveTimeInSeconds()
    .then(function(res) { console.log(res) })

```
