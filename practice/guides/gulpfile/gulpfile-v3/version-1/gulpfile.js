//=============================================================================
// gulp version 3
//=============================================================================

// bring the required packages
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const terser = require('gulp-terser');
const browserSync = require('browser-sync').create();

// set the path
const htmlWatchFolder = '*.html'; // html
const serveBaseFolder = '.';

const sassEntryFolder = './src/scss/**/*.scss'; // sass
const sassOutputFolder = './dist';

const cssEntryFolder = './dist/*.css'; // minified css
const cssOutputFolder = './dist';

const jsEntryFolder = './src/js/**/*.js'; // js
const jsOutputFolder = './dist';
 
const jsMinifyEntryFolder = './dist/*.js'; // minified js
const jsMinifyOutputFolder = './dist';

//=============================================================================
// create the tasks for code development
//=============================================================================

// [1]
gulp.task('sass', () => {
    return gulp.src(sassEntryFolder)
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix({ 'overrideBrowserslist': [
            '> 1%',
            'ie >= 8',
            'edge >= 15',
            'ie_mob >= 10',
            'ff >= 45',
            'chrome >= 45',
            'safari >= 7',
            'opera >= 23',
            'ios >= 7',
            'android >= 4',
            'bb >= 10'
        ] }))
        .pipe(gulp.dest(sassOutputFolder));
});

// [2]
gulp.task('js', () => {
    return gulp.src(jsEntryFolder)
        .pipe(gulp.dest(jsOutputFolder));
});

// [3] start static serve
gulp.task('serve', (done) => {
    browserSync.init({
        server: {
            baseDir: serveBaseFolder,
            notify: false,
            open: false
        }
    });
    done();
});
 
// [4] reloads the webpage
gulp.task('reload', (done) => {
    browserSync.reload();
    done();
});

// [5] watch task
gulp.task('watch', () => {
    gulp.watch(htmlWatchFolder, gulp.series(['reload']));
    gulp.watch([sassEntryFolder, jsEntryFolder], gulp.series(['sass', 'js', 'reload']));
});

//=============================================================================
// create the tasks for code deployment
//=============================================================================

// [1]
gulp.task('css:minify', () => {
    return gulp.src(cssEntryFolder, { sourcemaps: true })
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix({ 'overrideBrowserslist': [
            '> 1%',
            'ie >= 8',
            'edge >= 15',
            'ie_mob >= 10',
            'ff >= 45',
            'chrome >= 45',
            'safari >= 7',
            'opera >= 23',
            'ios >= 7',
            'android >= 4',
            'bb >= 10'
        ] }))
        .pipe(minify())
        .pipe(gulp.dest(cssOutputFolder, { sourcemaps: '.' }));
});

// [2]
gulp.task('js:minify', () => {
    return gulp.src(jsMinifyEntryFolder, { sourcemaps: true })
        .pipe(terser())
        .pipe(gulp.dest(jsMinifyOutputFolder, { sourcemaps: '.' }));
});

//=============================================================================
// setup gulp commands for code development and production
//=============================================================================

// [1] run "gulp"
gulp.task('default', gulp.parallel(
    'sass', 'js', 'serve', 'watch'
));
 
// [2] run "gulp prod"
gulp.task('prod', gulp.parallel(
    'css:minify', 'js:minify'
));