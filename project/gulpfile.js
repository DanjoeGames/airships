var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('js', function() {
	return browserify('./js/main')
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('.'));
});

gulp.task('watch', function() {
	gulp.watch('js/*.js', ['js']);
});
