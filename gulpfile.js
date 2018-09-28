"use strict";

var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass");

// Compile Sass
gulp.task("sass", function() {
  return gulp
    .src("./scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});

gulp.task("watch", function() {
  gulp.watch("./scss/*.scss", ["sass"]);
});

// gulp.task("sass", function() {
//   return gulp
//     .src(["dist/scss/*.scss"])
//     .pipe(sass())
//     .pipe(gulp.dest("dist/css"))
//     .pipe(browserSync.stream());
// });

// Watch and Serve
// gulp.task("serve", ["sass"], function() {
//   browserSync.init({
//     server: "dist"
//   });

//   gulp.watch(["dist/*.html"]).on("change", browserSync.reload);
// });

// Default
// gulp.task("default", ["sass", "watch"]);
