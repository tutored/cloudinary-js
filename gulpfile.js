'use strict';

let gulp = require('gulp');
let concat = require('gulp-concat');
let del = require('del');

gulp.task('clean', function (done) {
  del(['dist'], done);
});

gulp.task('default', ['clean'], function () {
  return gulp.src(['./js/jquery.ui.widget.js', './js/jquery.iframe-transport.js', './js/jquery.fileupload.js', './js/jquery.cloudinary.js'])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./dist'));
});
