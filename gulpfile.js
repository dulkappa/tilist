var gulp = require('gulp');
var concat = require('gulp-concat');
var jade = require('gulp-jade');
var plumber = require('gulp-plumber');
var webserver = require('gulp-webserver');

gulp.task('components', function(){
	
	gulp
	.src([
		'bower_components/angular/angular.js'
	])
	.pipe(concat('components.js'))
	.pipe(gulp.dest('dist/js/'));
	
});

gulp.task('scripts', function(){

	gulp
	.src([
		'./src/main.js',
		'./src/**/*.js'
	])
	.pipe(plumber())
	.pipe(concat('main.js'))
	.pipe(gulp.dest('dist/js/'));
	
});

gulp.task('jade', function(){
	
	gulp
	.src('./templates/jade/index.jade')
	.pipe(plumber())
	.pipe(jade())
	.pipe(gulp.dest('dist/'));

});

gulp.task('webserver', ['jade', 'components', 'scripts'], function(){

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