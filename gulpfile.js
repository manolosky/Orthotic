var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    poststylus = require('poststylus'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps');

//Tarea para procesar los archivos .JS

gulp.task('compress', function (cb)
{
  pump([
      gulp.src('./js/dev/**.js'),
      sourcemaps.init(),
      concat('main.js'),
      babel(),
      gulp.dest('./js'),
      rename('main.min.js'),
      uglify(),
      sourcemaps.write('.'),
      gulp.dest('./js')
  ],cb);
});

// Tarea para compilar stylus
gulp.task('stylus', function (cb)
{
  pump([
    gulp.src('./css/stylus/main.styl'),
    sourcemaps.init(),
    stylus({
      compress: true,
      use: [
        poststylus(['autoprefixer', 'rucksack-css'])
      ]
    }),
    sourcemaps.write('.'),
    gulp.dest('./css/')
  ],cb);

});

//SOURCEMAPS STYLUS

// Tarea para vigilar los cambios
gulp.task('watch', function () {
  gulp.watch('./js/dev/**.js', ['compress'])
  gulp.watch('./css/stylus/**/*.styl', ['stylus'])
})

gulp.task('default', ['watch']);
