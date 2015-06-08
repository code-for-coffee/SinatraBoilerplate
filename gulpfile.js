var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');

var settings = {
  customJsFolder: 'js/app/*.js',
  jsLibsFolder: 'js/libs/*.js',
  distributionFolder: 'public/scripts/'
};

watch([settings.jsLibsFolder, settings.customJsFolder], function() {
    gulp.start('default');
});

gulp.task('default', function () {
    return gulp.src(['js/libs/jquery.js', 'js/libs/underscore.js', 'js/libs/backbone.js', settings.customJsFolder])
      .pipe(concat('app.js'))
      .pipe(uglify())
      .pipe(gulp.dest(settings.distributionFolder));
});
