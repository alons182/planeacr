var gulp        = require('gulp'),
    uglify      = require('gulp-uglify'),
    changed     = require('gulp-changed')
    imagemin    = require('gulp-imagemin'),
    stripDebug  = require('gulp-strip-debug'),
    minifyCSS   = require('gulp-minify-css'),
    minifyHTML  = require('gulp-minify-html'),
    browserify  = require('gulp-browserify'),
    rjs         = require('gulp-requirejs');


gulp.task('js', function () {
  gulp.src(['./js/vendor/jquery.cycle2.min.js','./js/main.js'])
  //gulp.src('./js/main.js')
    //.pipe(browserify())
    .pipe(uglify({ compress: true },{outSourceMap: true}))
    .pipe(stripDebug())
    .pipe(gulp.dest('./public/js'));

   
    
});
/*gulp.task('requirejsBuild', function() {
    rjs({
        baseUrl: './templates/planea/js',
        out: 'main.min.js',
        name: 'main',
         

        paths: {
            jquery: 'vendor/jquery-1.10.2.min',
            validate:'vendor/jquery.validate.min',
            cycle2: 'vendor/jquery.cycle2.min',
            
            
            

           
        },

      
        shim: {
            
            'validate':
            {
                deps: ['jquery'],
                exports: 'validate'
            },
            
            'cycle2': {
                deps: ['jquery'],
                exports: 'cycle2'
            }
            
            
        }
       
         

        
    },
    removeCombined: true,
    findNestedDependencies: true
        // ... more require.js options
    })
     .pipe(uglify({ compress: true }))    
    //.pipe(gulp.dest('./public/js')); // pipe it to the output DIR
    .pipe(stripDebug())
    .pipe(gulp.dest('./js')); // pipe it to the output DIR

    gulp.src('./js/vendor/require.js')
    .pipe(uglify({ compress: true }))
    .pipe(gulp.dest('./public/js/vendor'));
});*/

gulp.task('css', function () {
  gulp.src('./css/**/*.css')
    .pipe(minifyCSS({ keepSpecialComments: '*', keepBreaks: '*'}))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('images', function () {
  var imgSrc = './img/**/*',
      imgDst = './public/img';

  gulp.src('./img/**/*')
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});

gulp.task('html', function () {
  var htmlSrc = './*.html',
      htmlDst = './public';

  gulp.src(htmlSrc)
  .pipe(minifyHTML())
  .pipe(gulp.dest(htmlDst));
});

gulp.task('fonts', function () {
  gulp.src('./fonts/**')
    .pipe(gulp.dest('./public/fonts'));
});

gulp.task('watch', function () {
   gulp.watch('./js/main.js',['js'])
   
});

gulp.task('default', [ 'js', 'css', 'images', 'html', 'fonts','watch' ]);
