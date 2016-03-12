var gulp = require('gulp');
var nib = require('nib')();
var stylus = require('gulp-stylus');
var ejs = require('gulp-ejs');
var marked = require('gulp-markdown');

gulp.task('stylus', function() {
    return gulp.src('./src/*/*/*.styl')
    .pipe(stylus({use: nib}))
    .pipe(gulp.dest('./public'));

});

gulp.task('markdown', function() {
    return gulp.src('./src/markdown/markdown.md')
    .pipe(marked())
    .pipe(gulp.dest('./temp'));
});

gulp.task('ejs', ['markdown', 'stylus'], function() {
    return gulp.src('./src/ejs/example-github.ejs')
    .pipe(ejs({}, {ext: '.html'}))
    .pipe(gulp.dest('./public'));
});

gulp.task('build', function() {
    return gulp.src('./src/styles/*/*.styl')
    .pipe(stylus({use: nib}))
    .pipe(gulp.dest('./dest'));
});

gulp.task('public', ['ejs', 'build']);

