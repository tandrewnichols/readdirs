var gulp = require('gulp');
var codeclimate = require('gulp-codeclimate-reporter');

gulp.task('codeclimate', function() {
  if (process.version.indexOf('v4') > -1) {
    gulp.src('coverage/lcov.info', { read: false })
      .pipe(codeclimate({
        token: '0d2fa395e6177349807ee21c74b5cc6302182893598d2581ad59edb798217b14'
      }));
  }
});

