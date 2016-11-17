var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    responsive = require('gulp-responsive-images'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber');

gulp.task('default', ['watch']);

gulp.task('scripts', function(){
  gulp.src('src/js/**/*.js')
    .pipe(plumber())
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('sass', function(){
  gulp.src('src/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('banners', function(){
  gulp.src('src/banner/**/*.*')
    .pipe(plumber())
    .pipe(responsive({
      '**/*.*': [{
        width: 635,
        height: 250,
        suffix: '-sm',
        quality: 45
      },{
        width: 750,
        height: 295,
        suffix: '-md',
        quality: 60
      }, {
        width: 1100,
        height: 432,
        suffix: '-lg',
        quality: 60
      }, {
        width: 1400,
        height: 550,
        suffix: '-xl',
        quality: 60
      }, {
        width: 1270,
        height: 500,
        suffix: '-sm-2x',
        quality: 45
      }, {
        width: 1500,
        height: 590,
        suffix: '-md-2x',
        quality: 60
      }, {
        width: 2200,
        height: 864,
        suffix: '-lg-2x',
        quality: 60
      }, {
        suffix: '-xl-2x',
        quality: 60
      }]
    }))
    .pipe(gulp.dest('dist/banner'));
});

gulp.task('images', function(){
  gulp.src('src/images/**/*.*')
    .pipe(plumber())
    .pipe(responsive({
      '**/*.*': [{
        width: 365,
        suffix: '-sm',
        quality: 45
      }, {
        width: 500,
        suffix: '-md',
        quality: 45
      }, {
        width: 600,
        suffix: '-lg',
        quality: 45
      }, {
        width: 730,
        suffix: '-sm-2x',
        quality: 60
      }, {
        width: 1000,
        suffix: '-md-2x',
        quality: 60
      }, {
        width: 1200,
        suffix: '-lg-2x',
        quality: 60
      }]
    }))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('watch', function(){
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/js/**/*.js', ['scripts']);
});


