var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var rollup = require( 'rollup' );
var rollupUglify = require('rollup-plugin-uglify');


gulp.task('babelfy', function() {
  return gulp.src('js/*.*!js/main.rollup.js')
    .pipe(babel({
      presets: ['es2016']
    }))
    .pipe(gulp.dest('./temp/'));
});

gulp.task('rollup', ['babelfy'], function() {
  rollup.rollup({
    entry: 'js/main.rollup.js',
    plugins: [
      rollupUglify()
    ]
  }).then( function ( bundle ) {
    bundle.write({
      format: 'iife',
      dest: 'dist/bundle.js'
    });
  });
});


/**
* Simple task compile .less files
* Concatinate all styles into style.css
* Save style.css into dist folder
**/
gulp.task('css', function() {
  return gulp.src('less/*.*')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});


/**
* Watch all the changes in css and js folder
* Reload browser when code changed
**/
gulp.task('watch', function() {
  gulp.watch('less/*.*', ['css']);
  gulp.watch('js/*.*', ['rollup']);
});


gulp.task('default', ['rollup', 'css', 'watch']);
