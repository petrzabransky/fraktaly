"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat")
const typescript = require("gulp-typescript");

// 
// Watch
//

const scss = (cb) => {
  return gulp.src("./src/scss/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./src/css"));
  cb();
};

const ts = () => {
  return gulp.src("src/ts/**/*.ts")
    .pipe(typescript({
      noImplicitAny: true,
      module: "ES2015"
    }))
    .pipe(gulp.dest("./src/js"));
};

exports.default = () => {
  gulp.watch("src/scss/**/*.scss", scss);
  gulp.watch("src/ts/**/*.ts", ts);
};


// 
// Distribution
//

const tsDist = () => {
  return gulp.src([
    "src/ts/**/*.ts",
  ])
    .pipe(typescript({
      noImplicitAny: true,
      module: "ES2015"
    }))
    .pipe(gulp.dest("./dist/js"));
};

exports.ts = tsDist;

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
