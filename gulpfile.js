var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var es6transpiler = require('gulp-es6-transpiler');

var settings = {
  customJsFolder: 'js/app/*.js',
  jsLibsFolder: 'js/libs/*.js',
  jsTranspiledES6Folder: 'js/transpiled/',
  distributionFolder: 'public/scripts/'
};

// listen for ES6 changes only
// watch([settings.customJsFolder], function() {
//   gulp.start('transpiling-js-to-es6');
// });

watch([settings.jsLibsFolder, settings.customJsFolder], function() {
  gulp.start('default');
});

gulp.task('default', function () {

  gulp.start('transpiling-es6-to-es5');

  return gulp.src(['js/libs/jquery.js', 'js/libs/underscore.js', 'js/libs/backbone.js', settings.jsTranspiledES6Folder + '*.js'])
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest(settings.distributionFolder));
});

gulp.task('transpiling-es6-to-es5', function() {
   return gulp.src(settings.customJsFolder)
    .pipe(concat('app.js'))
    .pipe(es6transpiler())
    .pipe(gulp.dest(settings.jsTranspiledES6Folder));
});
