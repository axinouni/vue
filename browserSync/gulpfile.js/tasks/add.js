const gulp = require('gulp');
const git = require('gulp-git');
// add命令
gulp.task('add', function () {
    return gulp.src('./haodingkang/')
        .pipe(git.add());
});
