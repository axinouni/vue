const gulp = require('gulp');
const git = require('gulp-git');
// push 远程仓库
gulp.task('push', function () {
    git.push('origin', 'master', function (err) {
        if (err) {
            console.error(err);
        }
    });
});
