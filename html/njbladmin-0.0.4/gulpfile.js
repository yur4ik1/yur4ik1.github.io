"use strict";
const { src, dest, parallel, series, watch } = require("gulp");
const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const cssbeautify = require("gulp-cssbeautify");
const removeComments = require("gulp-strip-css-comments");
const rename = require("gulp-rename");
const sass = require("gulp-sass")(require("sass"));
const cssnano = require("gulp-cssnano");
const uglify = require("gulp-uglify");
const plumber = require("gulp-plumber");
const panini = require("panini");
const imagemin = require("gulp-imagemin");
const del = require("del");
const notify = require("gulp-notify");
const browserSync = require("browser-sync").create();
const webpack = require("webpack-stream");
const rev = require("gulp-rev");
const revCollector = require("gulp-rev-collector");
const concat = require("gulp-concat");
const debug = require("gulp-debug");

const srcPath = "src/";
const distPath = "dist/";

const path = {
  build: {
    html: distPath,
    css: distPath + "assets/css/",
    js: distPath + "assets/js/",
    images: distPath + "assets/images/",
    fonts: distPath + "assets/fonts/",
  },
  src: {
    html: srcPath + "*.html",
    css: srcPath + "assets/scss/*.scss",
    js: srcPath + "assets/js/*.js",
    images:
      srcPath +
      "assets/images/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}",
    fonts: srcPath + "assets/fonts/**/*.{eot,woff,woff2,ttf,svg}",
  },
  watch: {
    html: srcPath + "**/*.html",
    js: srcPath + "assets/js/**/*.js",
    css: srcPath + "assets/scss/**/*.scss",
    images:
      srcPath +
      "assets/images/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}",
    fonts: srcPath + "assets/fonts/**/*.{eot,woff,woff2,ttf,svg}",
  },
  clean: "./" + distPath,
};

function serve() {
  browserSync.init({
    server: {
      baseDir: "./" + distPath,
    },
  });
}

function revCollectorTask() {
  return src([`${distPath}assets/manifest/**/*.json`, "dist/**/*.html"])
    .pipe(debug())
    .pipe(
      revCollector({
        replaceReved: true,
      })
    )
    .pipe(dest("dist/"))
    .pipe(browserSync.reload({ stream: true }));
}

function copyHtml() {
  return src(path.src.html, { base: srcPath })
    .pipe(dest(path.build.html))
    .pipe(browserSync.reload({ stream: true }));
}

function html() {
  return src(path.build.html, { base: distPath })
    .pipe(plumber())
    .pipe(dest(path.build.html))
    .pipe(browserSync.reload({ stream: true }));
}

function cleanOldCss() {
  return del([`${path.build.css}*.min.css`]);
}

function css(done) {
  gulp.series(cleanOldCss, function actualCss() {
    return gulp
      .src("src/assets/scss/*.scss")
      .pipe(
        plumber({
          errorHandler: function (err) {
            notify.onError({
              title: "SCSS error",
              message: "error: <%= error.message %>",
            })(err);
            this.emit("end");
          },
        })
      )
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(cssbeautify())
      .pipe(concat("main.css"))
      .pipe(dest(path.build.css))
      .pipe(
        cssnano({
          zindex: false,
          discardComments: {
            removeAll: true,
          },
        })
      )
      .pipe(removeComments())
      .pipe(
        rename({
          suffix: ".min",
          extname: ".css",
        })
      )
      .pipe(rev())
      .pipe(dest(path.build.css))
      .pipe(rev.manifest())
      .pipe(dest("dist/assets/manifest/css"))
      .pipe(browserSync.reload({ stream: true }))
      .on('end', done);
  })();
}

function cleanOldJs() {
  return del([`${path.build.js}*.min.js`]);
}

function js(done) {
  gulp.series(cleanOldJs, function actualJs() {
    return gulp
      .src("src/assets/js/*.js")
      .pipe(plumber())
      .pipe(webpack(require("./webpack.config.js")))
      .pipe(rev())
      .pipe(gulp.dest("dist/assets/js/"))
      .pipe(rev.manifest())
      .pipe(gulp.dest("dist/assets/manifest/js"))
      .pipe(browserSync.reload({ stream: true }))
      .on('end', done);
  })();
}

function images() {
  return src(path.src.images, { base: srcPath + "assets/images/" })
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 80, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest(path.build.images))
    .pipe(browserSync.reload({ stream: true }));
}

function fonts() {
  return src(path.src.fonts, { base: srcPath + "assets/fonts/" })
    .pipe(dest(path.build.fonts))
    .pipe(browserSync.reload({ stream: true }));
}

function clean() {
  return del(path.clean);
}

function watchFiles() {
  watch([path.watch.html], series(copyHtml, html, revCollectorTask));
  watch([path.watch.css], series(cleanOldCss, css, revCollectorTask));
  watch([path.watch.js], series(cleanOldJs, js, revCollectorTask));
  watch([path.watch.images], images);
  watch([path.watch.fonts], fonts);
}

const build = series(
  clean,
  parallel(css, fonts, copyHtml, js),
  html,
  revCollectorTask,
  images
);

const watchTask = series(
  parallel(build, watchFiles, serve),
);

exports.revCollector = revCollectorTask;
exports.copyHtml = copyHtml;
exports.html = series(copyHtml, html);
exports.css = css;
exports.js = js;
exports.images = images;
exports.fonts = fonts;
exports.clean = clean;
exports.build = build;
exports.watch = watchTask;
exports.default = watchTask;
