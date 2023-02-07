"use strict";

const { src, dest, series, parallel } = require("gulp");

const distCSS = (cb) => {
  console.log("Distribution...");
  cb();
}

exports.dist = series(distCSS);


/*

DISTRIBUTION

distCss
distJs
distCopyRoot
distCopyImg
distVersion


WATCH

watchCss
watchJs

*/
