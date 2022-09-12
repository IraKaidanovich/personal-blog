const htmlPartial = require('gulp-html-partial');
const gulp = require('gulp');
const del = require('del');


gulp.task('html', () => {
  return gulp.src(['./src/pages/**/*.html'])
    .pipe(htmlPartial({
      basePath: 'src/partials/'
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

gulp.task('images', () => {
  return gulp.src(['./src/img/**/*.*'])
    .pipe(gulp.dest('./dist/img'))
});

gulp.task('videos', () => {
  return gulp.src(['./src/videos/**/*.*'])
    .pipe(gulp.dest('./dist/videos'))
});

gulp.task('clean', () => {
  return del('./dist');
})

gulp.task('watch', () => {
  gulp.watch('./src/pages/**/*.html', gulp.series('html'));
  gulp.watch('./src/partials/**/*.html', gulp.series('html'));

  gulp.watch('./src/css/**/*.css', gulp.series('css'))

  gulp.watch('./src/js/**/*.js', gulp.series('js'))

  gulp.watch('./src/img/**/*.*', gulp.series('images'))

  gulp.watch('./src/videos/**/*.*', gulp.series('videos'))
})

gulp.task('start', gulp.series(['clean', 'html', 'css', 'js', 'images', 'videos', 'watch']))
gulp.task('default', gulp.series(['start']));