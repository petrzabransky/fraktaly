"use strict";

const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const typescript = require('gulp-typescript');

const scss = (cb) => {
  return gulp.src('./src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./src/css'));
  cb();
};


const ts = () => {

  return gulp.src('src/ts/**/*.ts')
    .pipe(typescript({
      noImplicitAny: true

    }))
    .pipe(gulp.dest('./src/js'));
};


exports.default = () => {
  gulp.watch("src/scss/**/*.scss", scss);
  gulp.watch("src/ts/**/*.ts", ts);
};
exports.ts = ts;


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
