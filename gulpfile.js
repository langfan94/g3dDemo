const gulp = require('gulp');
const babel = require('gulp-babel');
var rename = require("gulp-rename");
var browserify = require("browserify");
var uglify = require('gulp-uglify'); // 压缩js文件
var pump = require('pump');
var fs = require("fs");
 
gulp.task("babel", (cb) => {
    return gulp.src("main.js")
      .pipe(babel({
        presets: ['env']
      }))
      .pipe(rename('bundle.js'))
      .pipe(gulp.dest("./"));
      cb(err);
  });

gulp.task('browserify', (cb) => {
    return browserify({
      entries: 'bundle.js',
      debug: true
    })
      .bundle()
      .pipe(fs.createWriteStream("./dist/bundle.js"))
      cb(err);
  })

gulp.task('uglify', (cb) => {
    pump([
        gulp.src('/dist/bundle.js'),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
})

gulp.task('default', ['babel', 'browserify', 'uglify']);