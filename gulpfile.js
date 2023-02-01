"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const minify = require("gulp-minify");
const version = require("gulp-version-number");
const rename = require("gulp-rename");
const htmlmin = require("gulp-htmlmin");
const replace = require('gulp-replace');


//
// Distribution
//

// Minify JS
const minifyJS = () => {
  return gulp
    .src(["./js/Point.js", "./js/Fractal.js", "./js/Tree.js", "./js/script.js"])
    .pipe(concat("main.js"))
    .pipe(
      minify({
        mangle: { toplevel: true },
        noSource: true,
        ext: {
          min: ".min.js",
        },
        exclude: ["tasks"],
      })
    )
    .pipe(gulp.dest(`./_dist/js`));
};

// Config for update version number
const versionCSSConfig = {
  value: "%TS%", // TS - Time stamp - string 10bit - 13 numeral
  append: {
    key: "v",
    cover: "1",
    to: ["css"],
  },
};

const versionJSConfig = {
  value: "%TS%", // TS - Time stamp - string 10bit - 13 numeral
  append: {
    key: "v",
    cover: "1",
    to: ["js"],
  },
};

// Update version number of linked files .CSS and .JS in index.html
const minifyHTML = () => {
  return gulp
    .src("./index.html")
    .pipe(version(versionCSSConfig))
    .pipe(version(versionJSConfig))
    .pipe(replace("./css/style.css", "./css/style.min.css"))
    .pipe(replace("./js/main.js", "./js/main.min.js"))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(`./_dist`));
};

// Minify CSS from SCSS
const minifyCSS = () => {
  return gulp
    .src("./scss/style.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(rename({ extname: ".min.css" }))
    .pipe(gulp.dest("./_dist/css"));
};

const copyImg = () => {
  return gulp
    .src("./img/**/*.*")
    .pipe(gulp.dest("./_dist/img"));
};

const copyRoot = () => {
  return gulp
    .src(".htaccess")
    .pipe(gulp.dest("./_dist/"));
};

const copyFont = () => {
  return gulp
    .src("./css/font/*.*")
    .pipe(gulp.dest("./_dist/css/font"));
};

exports.dist = gulp.series(minifyHTML, minifyJS, minifyCSS, copyImg, copyRoot, copyFont);

// //
// // Watch events
// //


// Update version number of linked files .CSS in index.html
const versionCSSWatch = () => {
  return gulp.src("./index.html").pipe(version(versionCSSConfig)).pipe(gulp.dest("./"));
};

// Update version number of linked files .JS in index.html
// const versionJSWatch = () => {
//   return gulp.src("./index.html").pipe(version(versionJSConfig)).pipe(gulp.dest("./"));
// };

// Build CSS from SCSS
const buildCssWatch = () => {
  return gulp
    .src("./scss/style.scss")
    .pipe(
      sass().on("error", sass.logError)
    )
    .pipe(gulp.dest("./css"));
};

// Build JS
const buildJSWatch = () => {
  return gulp
    // .src(["./js/*.js", "!./js/main.js"])
    .src(["./js/Point.js", "./js/Fractal.js", "./js/Tree.js", "./js/script.js"])
    .pipe(concat("main.js"))
    .pipe(gulp.dest(`./js`));
};

gulp.task("watch", () => {
  // Watching style.scss for update
  gulp.watch("./scss/**/*.scss", gulp.series(buildCssWatch));
  // Watching *.js for update
  gulp.watch(["./js/*.js", "!./js/main.js"], gulp.series(buildJSWatch));
});
