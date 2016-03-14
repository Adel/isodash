var gulp = require('gulp');
var del = require('del');
var ts = require('gulp-typescript');
var concat = require('gulp-concat');
var cache = require('gulp-cached');
var remember = require('gulp-remember');
var sourcemaps = require('gulp-sourcemaps');

var config = require('./config');

var TASK_DEV_CLEAN = 'dev.clean';
var TASK_DEV_TYPESCRIPT_CLIENT = 'dev.typescript.client';
var TASK_DEV_TYPESCRIPT_SERVER = 'dev.typescript.server';
var TASK_DEV_WATCH = 'dev.watch';

module.exports.piorTasks = [TASK_DEV_CLEAN];
module.exports.tasks = [TASK_DEV_TYPESCRIPT_CLIENT, TASK_DEV_TYPESCRIPT_SERVER, TASK_DEV_WATCH];

gulp.task(TASK_DEV_CLEAN, () => {
    return del(config.server.ts.dest, {force: true});
});

gulp.task(TASK_DEV_TYPESCRIPT_CLIENT, () => {
    var tsResult = gulp.src(config.client.ts.files)
        .pipe(cache('scripts'))
        .pipe(sourcemaps.init())
        .pipe(ts(config.client.ts.options));

    return tsResult.js
        .pipe(remember('scripts'))
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.client.ts.dest));
});

gulp.task(TASK_DEV_TYPESCRIPT_SERVER, () => {
    var tsResult = gulp.src(config.server.ts.files)
        .pipe(cache('scripts'))
        .pipe(sourcemaps.init())
        .pipe(ts(config.server.ts.options));

    return tsResult.js
        .pipe(remember('scripts'))
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.client.ts.dest));
});

gulp.task(TASK_DEV_WATCH, () => {
    gulp.watch(config.client.ts.files, [TASK_DEV_TYPESCRIPT_CLIENT]);
    gulp.watch(config.server.ts.files, [TASK_DEV_TYPESCRIPT_SERVER]);
});