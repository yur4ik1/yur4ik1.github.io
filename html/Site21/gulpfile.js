const GulpClient = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
const fileinclude = require('gulp-file-include');

gulp.task("sass-compile", function(){
    return gulp.src("./scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./css/"))
    
})

gulp.task('fileinclude', function() {
    return gulp.src(['./src/privacy.html','./src/drinks.html','./src/shop-info.html','./src/shop-payment.html','./src/shop-item.html','./src/shop.html','./src/shop-cart.html','./src/index.html','./src/donation.html','./src/museums.html','./src/tellogleio.html','./src/catacombs.html','./src/casa-bianka.html','./src/glasshouse-project.html','./src/farmaceutic-museum.html','./src/our-place.html','./src/cruise.html','./src/gallery.html', './src/history.html','./src/contact-us.html'])
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      
      .pipe(gulp.dest('./'));
    });
    
    
gulp.task("watch", function(){
    gulp.watch("./src/**/*.html", gulp.series("fileinclude")),
    gulp.watch("./scss/**/*.scss", 
    gulp.series("sass-compile"))
    
})





