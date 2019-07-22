var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    cssnano = require('cssnano'),
    cssnext = require('postcss-cssnext'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    precss = require('precss'),
    bourbon = require("node-bourbon").includePaths,
    // neat = require("node-neat").includePaths,
    rucksack = require('rucksack-css'),
    autoprefixer = require('autoprefixer'),
    lost = require('lost'),
    browserSync = require('browser-sync'),
    rename = require("gulp-rename"),
    mqpacker = require("css-mqpacker"),
    pug = require('gulp-pug'),
    changed = require('gulp-changed');

// /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
// SASS
// /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
gulp.task('sass', function () {
  var processors = [
      lost,
      rucksack,
      mqpacker,
      //cssnano({zindex: false}),
      autoprefixer

  ];
  return gulp.src(['assets/sass/**/*.sass','assets/sass/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: "compact", //compact, nested, expanded, compressed
        includePaths: ["sass"].concat(bourbon)
    }).on("error",sass.logError))
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())
});

// /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
// CSS
// /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
gulp.task("css", function() {
    var processors = [
        precss({}),
        lost,
        // cssnano,
        rucksack,
        cssnext({}),

    ]

    return gulp.src("assets/css/precss_src/**/*.css")
        .pipe(sourcemaps.init())
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream())
});


// /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
// PUG
// /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
gulp.task('pug', function buildHTML() {
  return gulp.src('./assets/pug/**/[^_]*.pug')
  .pipe(changed('./', {extension: '.html'}))
  .pipe(pug({
      pretty: true
    // Your options in here.
  }))
  .pipe(rename(function (path) {
      path.extname = ".html";
      return path;
  }))
  .pipe(gulp.dest('./')); // tell gulp our output folder
});




// /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
// Watch
// /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
gulp.task('browserWatch',["sass","css", "pug"],browserSync.reload);

gulp.task('watch', function(){

    browserSync({
        server: {
            baseDir: "./",
            index: "index.html"
        },
        // proxy: "localhost:8888",
        browser: ["google chrome","firefox","safari"],
        files: ["./**/*.html", "./**/*.php", "./**/*.css"],
        notify: false,
        open: false
    })

    gulp.watch('assets/sass/**/*.scss', ['sass']);
    gulp.watch('assets/sass/**/*.sass', ['sass']);
    gulp.watch('css/precss_src/**/*.css',['css']);
    gulp.watch('assets/pug/**/*.pug', ['pug']);

    gulp.watch("browserWatch");
});

gulp.task("default", function(){
    gulp.start("watch")
})
