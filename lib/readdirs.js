var fs = require('fs');
var async = require('async');
var _ = require('lodash');

module.exports = function(dirs, options, fn) {
  if (typeof options === 'function') {
    fn = options;
    options = {};
  }

  async.reduce(dirs, [], function(memo, dir, next) {
    fs.readdir(dir, function(err, list) {
      if (err) {
        next(err);
      } else {
        if (options.absolute) {
          list = _.map(list, function(item) {
            return [dir, item].join('/');
          });
        }
        if (options.nested) {
          memo.push(list);
          next(null, memo);
        } else {
          next(null, memo.concat(list)); 
        }
      }
    });
  }, function(err, files) {
    if (err) {
      fn(err);
    } else {
      if (files.length && typeof files[0] === 'string') {
        files = files.sort();
      }
      fn(null, files);
    }
  });
};
