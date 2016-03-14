var gulp = require('gulp');
var runSequence = require('run-sequence');
var dev = require('./dev');

gulp.task('dev', (done) => {
    runSequence(dev.piorTasks, dev.tasks, done);
});