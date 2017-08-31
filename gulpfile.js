"use strict";

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var bulkSass = require('gulp-sass-bulk-import');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var wrap = require('gulp-wrap');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var newer = require('gulp-newer');
var remember = require('gulp-remember');
var templateCache = require('gulp-template-cache');

var outputFolder = 'dist/';

gulp.task('assets', function() {
  return gulp.src(['src/components/**/*.scss'])
        .pipe(bulkSass())
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(concat('angular-dimension.css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(autoprefixer())
        .pipe(minifyCSS({ cache: true }))
        .pipe(sourcemaps.write('.'))
        .pipe(plumber.stop())
        .pipe(gulp.dest(outputFolder));
});

gulp.task('build-app', function() {  
    return gulp.src(['src/angular-dimension.js', 'src/components/**/*.js'])
        .pipe(plumber())
        .pipe(concat('angular-dimension.js'))
        .pipe(wrap('(function() {\n"use strict";\n<%= contents %>\n})();'))
        .pipe(sourcemaps.init())
        .pipe(gulp.dest(outputFolder))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(outputFolder));
});

gulp.task('watch', function() {
    gulp.watch('src/**/*', ['assets', 'build-app']);
});

gulp.task('default', ['assets', 'build-app']);