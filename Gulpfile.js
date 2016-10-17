var gulp = require('gulp');
var sass = require('gulp-sass');

// transpiler les fichiers sass de 'css/' vers 'sass/'
gulp.task('styles', function() {
  gulp.src('sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css/'));
});


// surveiller les fichiers sass
gulp.task('default', ['styles'], function() {
  gulp.watch('sass/**/*.scss',['styles']);
});
