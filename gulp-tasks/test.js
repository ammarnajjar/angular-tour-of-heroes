var gulp = require('gulp');
var gutil = require('gulp-util');

function lint(cb) {
  const tslint = require('gulp-tslint');
  // Built-in rules are at https://palantir.github.io/tslint/rules/
  const path = require('path');
  return gulp
      .src([
        './src/**/*.ts',
        './e2e/**/*.ts',
        './*.ts',

        // Ignore node_modules directories
        '!**/node_modules/**',

        // Ignore built files directories
        '!**/built/**',
        '!**/dist/**',

        // Ignore special files
        '!**/*.externs.js',

        // Ignore generated files due to lack of copyright header
        // TODO(alfaproject): make generated files lintable
        '!**/*.d.ts',
        '!**/*.ngfactory.ts',
      ])
      .pipe(tslint({
        configuration: path.resolve(__dirname, '../tslint.json'),
        formatter: 'prose',
      }))
	.pipe(tslint.report({emitError: true}));
};

function e2e(cb) {
	gutil.log('running e2e-tests')
	cb();
};

function unit(cb) {
   gutil.log('running unit-tests')
	cb();
};

gulp.task('e2e', e2e);
gulp.task('test', unit);
gulp.task('lint', lint);