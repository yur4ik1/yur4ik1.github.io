const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
const fileinclude = require('gulp-file-include');
const browserSync = require('browser-sync').create();

gulp.task("sass-compile", function(){
  return gulp.src("./src/sass/**/*.scss")
  .pipe(sourcemaps.init())
  .pipe(sass().on("error", sass.logError))
  .pipe(sourcemaps.write("./"))
  .pipe(gulp.dest("./css/"))
  .pipe(browserSync.stream())
})

gulp.task('fileinclude', function() {
  return gulp.src(['./src/*.html', '!./src/patials/*.html'])
    .pipe(fileinclude({
    prefix: '@@',
    basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
  });


gulp.task("watch", function(){
  (gulp.series("fileinclude", "sass-compile")())

  browserSync.init({
    server: "./"
  })
  gulp.watch("./js/**/*.js").on('change', browserSync.reload),
  gulp.watch("./src/**/*.html", gulp.series("fileinclude")).on('change', browserSync.reload),
  gulp.watch("./src/sass/**/*.scss", gulp.series("sass-compile"))
})




