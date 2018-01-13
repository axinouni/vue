const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');// 将任务用同步队列方式执行。（任务之间有依赖）
// 执行 add  commit push 三步骤
gulp.task('default', function (cb) {
    gulpSequence(['status', 'add'], 'commitopt', 'push', cb);
});
