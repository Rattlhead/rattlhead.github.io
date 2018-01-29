'use strict';

var gulp = require('gulp');
var csso = require('gulp-csso');
var rename = require('gulp-rename');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var server = require('browser-sync').create();
var csscomb = require('gulp-csscomb');
var svgmin = require('gulp-svgmin');
var svgstore = require('gulp-svgstore');
var webp = require('gulp-webp');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var watch = require('gulp-watch');
var del = require('del');
var run = require('gulp-run-sequence');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
  return gulp.src('build/**/*')
    .pipe(ghPages());
});

var path = {
  build: {
    html: 'build/',
    js: 'build/js/',
    img: 'build/img/',
    css: 'build/css/',
    fonts: 'build/fonts/'
  },
  src: {
    html: '*.html',
    js: 'js/*.js',
    img: 'img/*.*',
    fonts: 'fonts/**/*.{woff,woff2}',
    style: 'less/style.less'
  },
  watch: {
    html: '*.html',
    js: 'js/*.js',
    img: 'img/**/*.*',
    fonts: 'fonts/**/*.*',
    style: 'less/**/*.less'
  }
};

//Сброрка html
gulp.task('build-html', function() {
  return gulp.src(path.src.html)
  .pipe(gulp.dest(path.build.html))
  .pipe(server.reload({stream: true}));
});

//сборка JS
gulp.task('build-js', function() {
  return gulp.src(path.src.js)
  .pipe(uglify())
  .pipe(gulp.dest(path.build.js))
  .pipe(server.reload({stream: true}));
});

//сборка стилей
gulp.task('build-style', function() {
  gulp.src(path.src.style)
  .pipe(plumber())
  .pipe(less())
  .pipe(postcss([
    autoprefixer()
  ]))
  .pipe(gulp.dest(path.build.css))
  .pipe(csso())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest(path.build.css))
  .pipe(server.reload({stream: true}));
});

//сборка графики
gulp.task('build-img', function() {
  return gulp.src(path.src.img)
  .pipe(imagemin({
    progressive: true,
    optimizationLevel: 3,
    svgoPlugins: [{removeViewBox: false}]
  }))
  .pipe(gulp.dest(path.build.img));
});

//переместим шрифты
gulp.task('build-fonts', function() {
  return gulp.src(path.src.fonts)
  .pipe(gulp.dest(path.build.fonts))
});

//чистим папку
gulp.task('clean', function() {
  return del('build');
});

//общая сборка
gulp.task('build', function (done) {
  run(
    'clean',
    'build-html',
    'build-js',
    'build-style',
    'build-img',
    'build-fonts',
    'symbols',
    'webp',
    done
  );
});

gulp.task('watch', function() {
  gulp.watch(path.watch.style, ['build-style']);
  gulp.watch(path.watch.html, ['build-html']);
  gulp.watch(path.watch.js, ['build-js']);
  gulp.watch(path.watch.img, ['build-img']);
  gulp.watch(path.watch.fonts, ['build-fonts']);
});

gulp.task('serve', ['watch'], function() {
  server.init({
    server: './build',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
});

gulp.task('csscomb', function() {
  return gulp.src('less/blocks/*.less')
  .pipe(plumber())
  .pipe(csscomb())
  .pipe(gulp.dest('less/blocks/'))
});

gulp.task('symbols', function() {
  return gulp.src('img/icons/*.svg')
  .pipe(svgmin())
  .pipe(svgstore({ inlineSvg: true }))
  .pipe(rename('sprite.svg'))
  .pipe(gulp.dest('build/img'));
});

gulp.task('webp', function() {
  return gulp.src('img/*.jpg')
  .pipe(webp())
  .pipe(gulp.dest('build/img/webp'));
});
