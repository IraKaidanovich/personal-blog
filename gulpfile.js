let project_folder = "dest";
let source_folder = "src";

const gulp        = require('gulp');
const fileinclude = require('gulp-file-include');

const paths = {
  scripts: {
    src: './',
    dest: './build/'
  }
};
async function includeHTML(){
  return gulp.src([
    '*.html',
    '!header.html', // ignore
    '!footer.html' // ignore
    ])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(paths.scripts.dest));
}

function createDist() {
  return src(['./'], { allowEmpty: true }).pipe(dest('dist/client/scripts'));
}
exports.default = includeHTML;