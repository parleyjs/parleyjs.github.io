var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-ruby-sass'),
    prefix = require('gulp-autoprefixer'),
    minifyCSS   = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    jade = require('gulp-jade'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'), // Livereload plugin needed: https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
    tinylr = require('tiny-lr'),
    express = require('express'),
    app = express(),
    marked = require('marked'),
    path = require('path'),
    rename = require('gulp-rename'),
    browserify = require('gulp-browserify'),
    server = tinylr();

//Error Catching
///////////////////////////////////////////////
function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

//Compile SCSS
///////////////////////////////////////////////
gulp.task('styles', function() {
    gulp.src('./src/stylesheets/*.sass')
      .pipe(sass({ quiet: true }))
      .pipe(sass({ style: 'expanded' }))
      .pipe(gulp.dest('./stylesheets'))
      .pipe( livereload( server ));
    // auto prefixing the world
////////////////////////////////////////////////////
    gulp.src('./stylesheets/main.css')
      .pipe(prefix('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
      .pipe(rename({suffix: '.min'}))
      .pipe(minifyCSS())
      .pipe(gulp.dest('./stylesheets'));
});

gulp.task('coffee', function() {
  return gulp.src('src/scripts/main.coffee', { read: false })
    .pipe(browserify({
      transform: ['coffeeify'],
      extensions: ['.coffee']
    }))
    .pipe( rename('app.js') )
    .pipe( gulp.dest('./scripts') )
    .pipe( livereload( server ) );
});

gulp.task('templates', function() {
  return gulp.src('src/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe( gulp.dest('.') )
    .pipe( livereload( server ));
});

gulp.task('express', function() {
  app.use(express.static(path.resolve('.')));
  app.listen(1337);
  gutil.log('Listening on port: 1337');
});

gulp.task('watch', function () {
  server.listen(35729, function (err) {
    if (err) {
      return console.log(err);
    }

    gulp.watch('src/stylesheets/*.sass',['styles']);

    gulp.watch('src/stylesheets/*.sass',['styles']);

    gulp.watch('src/stylesheets/global/*.sass',['styles']);

    gulp.watch('src/stylesheets/layouts/*.sass',['styles']);

    gulp.watch('src/scripts/*.coffee',['coffee']);

    gulp.watch('src/*.jade',['templates']);
    
  });
});

// Default Task
gulp.task('default', ['coffee','styles','templates','express','watch']);