const gulp = require('gulp');
const git = require('gulp-git');
// 截获动态commit信息
let commitInfo = process.argv[process.argv.length - 1];
// commit 命令
gulp.task('commitopt', function () {
    return gulp.src('./haodingkang/')
        .pipe(git.commit(undefined, {
            args: '-m' + '"' + commitInfo + '"',
            disableMessageRequirement: true
        }));
});
