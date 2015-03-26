var gulp = require('gulp');
var jade = require('gulp-jade');
var plumber = require('gulp-plumber');
var webserver = require('gulp-webserver');

gulp.task('scripts', function(){
	.src([
		'./src/main.js',
		'./src/**/*.js'
	])
	.pipe(plumber())
	.pipe(gulp.dest('dist/js/'));
	
});

gulp.task('jade', function(){
	
	gulp
	.src('./templates/jade/index.jade')
	.pipe(plumber())
	.pipe(jade())
	.pipe(gulp.dest('dist/'))
	;

});

gulp.task('webserver', ['jade'], function(){

	gulp
	.src('./dist')
	.pipe(
		webserver({
			port: 3333,
			libereload: true
		})
	);
	
});

gulp.task('default', ['webserver']);