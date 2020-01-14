/* eslint-disable */
// const { src, dest, parallel } = require('gulp');
const gulp = require('gulp');
const concat = require('gulp-concat');
const pipeline = require('readable-stream').pipeline;
const babel = require('gulp-babel');

const polyfill = require('@babel/polyfill');
const ptfo = require('@babel/plugin-transform-for-of');

const bpcp = require('@babel/plugin-proposal-class-properties');
const bpors = require('@babel/plugin-proposal-object-rest-spread');

const uglify = require('gulp-uglify');

const [pthDist, pthSrc] = [
  'dist/',
  'src/',
];

// function js() {
//   return src(`${pthSrc}*.ts`, { sourcemaps: false })
//     .pipe(babel({
//       presets: ['@babel/typescript'],
//       plugins: [bpcp, bpors],
//     }))
//     .pipe(()=>{uglify();})
//     .pipe(concat('index.js'))
//     .pipe(dest(pthDist, { sourcemaps: false }));
// }
function clean(cb) { cb(); }
function build(cb) { cb(); }

gulp.task('jsts', function () {
  return pipeline(
        gulp.src(`${pthSrc}*.ts`),
        babel({
          presets: ['@babel/typescript','@babel/env'],
          plugins: [bpcp, bpors, polyfill, ptfo],
        }),
        uglify(),
        concat('index.js'),
        gulp.dest(pthDist, { sourcemaps: false })
  );
});

build(gulp.task('jsts'));

exports.build = build;
exports.default = gulp.series(clean, build);
