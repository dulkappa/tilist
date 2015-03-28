var gulp = require('gulp');
var concat = require('gulp-concat');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var plumber = require('gulp-plumber');
var webserver = require('gulp-webserver');

gulp.task('components', function(){
    
    gulp
	.src([
	    'bower_components/angular/angular.js',
	    'bower_components/jquery/dist/jquery.js',
	    'bower_components/jquery-ui/jquery-ui.min.js'
	])
	.pipe(concat('components.js'))
	.pipe(gulp.dest('dist/js/'));

   gulp
	.src(['bower_components/jquery-ui/themes/base/jquery-ui.min.css'])
	.pipe(plumber())
	.pipe(concat('components.css'))
	.pipe(gulp.dest('dist/css/'));

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

gulp.task('stylus', function(){

    gulp
	.src(['./templates/stylus/main.styl'])
	.pipe(plumber())
	.pipe(stylus({
	    compress: true
	}))
	.pipe(gulp.dest('dist/css/'));

});

gulp.task('jade', function(){
	
    gulp
	.src('./templates/jade/index.jade')
	.pipe(plumber())
	.pipe(jade())
	.pipe(gulp.dest('dist/'));

});

gulp.task('webserver', ['stylus', 'jade', 'components', 'scripts'], function(){
    
    gulp
	.src('./dist')
	.pipe(
	    webserver({
		port: 3333,
		libereload: true
	    })
	);
    
    gulp.watch('templates/stylus/**/*', ['stylus']);
    gulp.watch('templates/jade/**/*', ['jade']);
    gulp.watch('src/**/*', ['scripts']);
    gulp.watch('components.*', ['components']);
    
});

gulp.task('default', ['webserver']);
