'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');

var paths = {
  scripts: 'src/*.js',
  tests: 'test/*.js'
};

gulp.task('test', function () {
  gulp.src(paths.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
  
  gulp.src(paths.tests)
    .pipe(mocha());
});

gulp.task('build', function () {
  gulp.src('src/identity.js')
    .pipe(browserify({
      insertGlobals: true,
      debug: true
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['test', 'build'], function () {
  gulp.watch([paths.scripts, paths.tests], ['test', 'build']);
});

gulp.task('default', ['test', 'build', 'watch']);