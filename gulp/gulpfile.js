//require gulp
var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-minify-css');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

//concat and uglify the js files
gulp.task('scripts',function(){
	 return gulp.src('./src/js/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist/js/'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/js/'));
});

// concat and minify the css files
gulp.task('styles', function() {
  return gulp.src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css/'))
    .pipe(cssmin())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/css/'));
});

//css converted to scss
var cssScss = require('gulp-css-scss');
gulp.task('css-scss',function(){
	return gulp.src('./src/css/*.css')
	.pipe(cssScss())
	.pipe(gulp.dest('./dist/css'));
});

//minify the images
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
 
gulp.task('picMinify', () => {
    return gulp.src('./src/image/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./dist/image'));
});

//clean the file or folder
var cleanfile = require('gulp-clean');
 
gulp.task('clean', function () {
    return gulp.src('./delete/login.scss', {read: false})
        .pipe(cleanfile());
});

//gulp watch
gulp.task('watch', function() {
	gulp.watch('./src/css/*.css', ['css-scss']);
});

//jshint

var jshint = require('gulp-jshint');
gulp.task('lint', function() {
  return gulp.src('./app/scripts/controllers/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
});
