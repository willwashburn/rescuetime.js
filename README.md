# rescuetime.js [![Build Status](https://travis-ci.org/willwashburn/rescuetime.js.svg?branch=master)](https://travis-ci.org/willwashburn/rescuetime.js)

> **Note:** This is in super alpha and really hasn't been tested or used. Feedback and PR's welcome!

An API client for rescuetime.com

## Install
```
npm install rescuetime.js
```

## Usage
This is still very much in alpha. You can make calls to the api like so:
> **Note:** I suggest you use [dotenv](https://www.npmjs.com/package/dotenv) to store your API key since you definitely do not want that in version control.
```js

    var Rescuetime = require('rescuetime.js').create('YOUR_API_KEY')


   var parameters = {
        pv: 'rank',
        rk: 'productivity'
    }

    this.request('GET', 'anapi/data', parameters, function(err,response) {
            console.log(res)
    ));

```

You can also use promises if that's your squeeze
```js

   var parameters = {
        pv: 'rank',
        rk: 'productivity'
    }

    this.request('GET', 'anapi/data', parameters)
    .then(function(response) { console.log(response})

```

There will be a series of methods that could be helpful. The first of which is a shortcut to getting all productive time for today:
```js
Rescuetime.totalProductiveTimeInSeconds().then(function(res) { console.log(res) })

```
