# rescuetime.js [![Build Status](https://travis-ci.org/willwashburn/rescuetime.js.svg?branch=master)](https://travis-ci.org/willwashburn/rescuetime.js)

> **Note:** This is in super alpha and really hasn't been tested or used. Feedback and PR's welcome!

An API client for rescuetime.com

## Install
```
npm install rescuetime.js
```

## Usage
This is still very much in alpha. In fact, there is only one method you can use!
```js

var Rescuetime = require('rescuetime.js').create('YOUR_API_KEY');

Rescuetime.getTodaysTotalProductiveTime().then(function(res) { console.log(res) })

```
> **Note:** I suggest you use [dotenv](https://www.npmjs.com/package/dotenv) to store your API key since you definitely do not want that in version control.
