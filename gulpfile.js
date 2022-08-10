const fileinclude = require('gulp-file-include');
const gulp = require('gulp');
const del = require('del');

function defaultTask(cb) {
gulp.task('html', () => {
  return gulp.src(['./src/pages/**/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: './src'
    }))
    .pipe(gulp.dest('./dist'))
});

gulp.task('css', () => {
  return gulp.src(['./src/css/**/*.*'])
    .pipe(gulp.dest('./dist/css'))
});

gulp.task('js', () => {
  return gulp.src(['./src/js/**/*.*'])
    .pipe(gulp.dest('./dist/js'))
})

gulp.task('clean', () => {
  return del('./dist');
})

gulp.task('watch', () => {
  gulp.watch('./src/pages/**/*.html', gulp.series('html'));
  gulp.watch('./src/partials/**/*.html', gulp.series('html'));

  gulp.watch('./src/css/**/*.css', gulp.series('css'))

  gulp.watch('./src/js/**/*.js', gulp.series('js'))
})

gulp.task('start', gulp.series(['clean', 'html', 'css', 'js', 'watch']))
cb();
}

exports.default = defaultTask