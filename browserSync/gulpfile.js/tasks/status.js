const gulp = require('gulp');
const git = require('gulp-git');
gulp.task('status', function () {
    git.status({args: '--porcelain'}, function (err, stdout) {
        if (err) {
            throw err;
        }
    });
});
