var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var es6transpiler = require('gulp-es6-transpiler');

var settings = {
  customJsFolder: 'js/app/*.js',
  jsLibsFolder: 'js/libs/*.js',
  jsTranspiledES6Folder: 'js/libs/*.js',
  distributionFolder: 'public/scripts/'
};

watch([settings.jsLibsFolder, settings.customJsFolder], function() {
  gulp.start('default');
});

gulp.task('default', function () {

  //gulp.start('transpileES6');

  return gulp.src(['js/libs/jquery.js', 'js/libs/underscore.js', 'js/libs/backbone.js', settings.jsTranspiledES6Folder])
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest(settings.distributionFolder));
});

gulp.task('transpileES6', function() {
  return gulp.src(settings.jsTranspiledES6Folder)
    .pipe(es6transpiler())
    .pipe(gulp.dest(settings.distributionFolder));
});
