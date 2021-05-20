//Require -> Import the dependences of the package.json
const { series, parallel, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');

//CSS utilities
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

//Compile SASS files to CSS files functions
function compileSASS() {
    return src('sass/main.scss')
        .pipe( sass() )
        .pipe( sass({
            outputStyle: 'expanded'
        }) )
        //.pipe( postcss( [ autoprefixer(), cssnano() ] ) ) 
        .pipe( dest('./build/css') )
}

//Auto save function
function saveAll() {
    watch('sass/**/*.scss', compileSASS)
}

//Calls the function using "gulp 'function'"
exports.compileSASS = compileSASS;
exports.saveAll = saveAll;