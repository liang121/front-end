var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');


// default task
gulp.task('default', function(){
	console.log("GULP IS WORKING!");
	console.log("Task options are below:");
	console.log("'sass'       --> convert all sass files into css files.");
	console.log("'imagemin'   --> minify all image files.");
	console.log("'clean'      --> remove folder or files from the 'build' folder that has been created due to the minified image task.");
	console.log("'jshint'     --> lint Javasript codes with specific reporters.");
	console.log("'watch'      --> watch the changes from all the files inside the source of image and sass tasks.");
});  

// sass task
gulp.task('sass', function(){
	return gulp.src('../app/assets/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../app/assets/styles/'));
});

// imagemin task
gulp.task('imagemin', function(){
	return gulp.src('../app/assets/images/src/**/*.*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            //use: [pngquant()]
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('../app/assets/images/build/'));
});

// clean task
gulp.task('clean', function(){
	return gulp.src('../app/assets/images/build', {read: false})
        .pipe(clean({force: true}));
	
});

// jshint task
gulp.task('jshint', function(){
	return gulp.src('../app/scripts/**/*.js')
    	.pipe(jshint())
    	.pipe(jshint.reporter(stylish));

});

// watch task
gulp.task('watch', function(){
	gulp.watch('../app/assets/sass/*.scss', ['sass']);
	gulp.watch('../app/assets/images/src/**/*.*', ['imagemin']);

});