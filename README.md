[![Build Status](https://travis-ci.org/tandrewnichols/readdirs.png)](https://travis-ci.org/tandrewnichols/readdirs) [![downloads](http://img.shields.io/npm/dm/readdirs.svg)](https://npmjs.org/package/readdirs) [![npm](http://img.shields.io/npm/v/readdirs.svg)](https://npmjs.org/package/readdirs) [![Code Climate](https://codeclimate.com/github/tandrewnichols/readdirs/badges/gpa.svg)](https://codeclimate.com/github/tandrewnichols/readdirs) [![Test Coverage](https://codeclimate.com/github/tandrewnichols/readdirs/badges/coverage.svg)](https://codeclimate.com/github/tandrewnichols/readdirs) [![dependencies](https://david-dm.org/tandrewnichols/readdirs.png)](https://david-dm.org/tandrewnichols/readdirs)

# readdirs

Read several directories at once asynchronously

## Installation

`npm install --save readdirs`

## Summary

This module is essentially a convenience wrapper for using [async](https://github.com/caolan/async) in combination with `fs.readdir`. It reads the directories you pass it and concatenates and sorts the results.

## Usage

Require `readdirs` and pass an array of directories (relative to pwd, as with `fs.readdir`), optionally an options object, and a callback, and you'll get an optional error and the list of files back.

The default usage returns only the file name, as readdir does.

```js
var readdirs = require('readdirs');

readdirs([__dirname + '/a', __dirname + '/b'], function(err, files) {
  // Files is an array of file names (just as with readdir)
});
```

But you can also request absolute paths if you need to be able to sort out which ones are in which directory.

```js
var readdirs = require('readdirs');

readdirs([__dirname + '/a', __dirname + '/b'], { absolute: true }, function(err, files) {
  // Files is an array of absolute file names
});
```

Or you can leave the arrays unmerged (i.e. an array of arrays instead of file names).

```js
var readdirs = require('readdirs');

readdirs([__dirname + '/a', __dirname + '/b'], { nested: true }, function(err, files) {
  // Files is an array of arrays. The first array is the files in __dirname/a
  // and the second is files in __dirname/b.
});
```

And of course, you could combine these options as well.

## Contributing

Please see [the contribution guidelines](CONTRIBUTING.md).
