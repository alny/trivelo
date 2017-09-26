var gulp = require('gulp')
var gp_concat = require('gulp-concat')
var gp_rename = require('gulp-rename')
var gp_uglify = require('gulp-uglify')
var minifyCSS = require('gulp-minify-css')
var uncss = require('gulp-uncss');
var autoprefixer = require('gulp-autoprefixer')
var to5 = require('gulp-6to5')

gulp.task('uncss', function () {
    return gulp.src('./public/assets/css/base.css')
        .pipe(uncss({
            html: ['./src/components/containers/*.js', './src/components/layouts/*.js']
        }))
        .pipe(gulp.dest('public/assets/css'));
});

gulp.task('css', function(){
  return gulp.src(
    [
      './public/assets/css/base.css',
      './public/assets/css/style.css'
    ]
  )
  .pipe(minifyCSS())
  .pipe(autoprefixer('last 2 version', 'safari 5', 'ie8', 'ie9'))
  .pipe(gp_concat('style.min.css'))
  .pipe(gulp.dest('./public/assets/css/'))
})

gulp.task('build', function(){
  return gulp.src(
    [
      './public/assets/js/main.js',
      './public/assets/js/bootstrap.min.js'


    ]
  )
  .pipe(gp_concat('gulp-concat.js'))
  .pipe(gulp.dest('./public/assets/min/js/'))
  .pipe(gp_rename('vendor.min.js'))
  .pipe(gp_uglify())
  .pipe(gulp.dest('./public/assets/js/'))
})

gulp.task('es6-es5', function(){
    return gulp.src([
                './src/*/**.js',
                './src/*/*/**.js',
                './src/serverapp.js'
            ]
        )
        .pipe(to5())
        .pipe(gulp.dest('./public/assets/es5/'))
});

gulp.task('default', ['css', 'build', 'uncss', 'es6-es5'], function(){})
