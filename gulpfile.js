"use strict";

const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

const buildCss = (cb) => {
  return gulp.src('./src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./src/css'));
  cb();
};

exports.default = () => {
  gulp.watch("src/scss/**/*.scss", buildCss);
};


/*

DISTRIBUTION

distCss
distJs
distCopyRoot
distCopyImg
distVersion


WATCH

buildCss

*/
