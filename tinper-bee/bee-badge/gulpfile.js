var gulp = require('gulp');
var fs = require('fs');
var inquirer = require('inquirer');
var spawn = require('cross-spawn');
var file = require('html-wiring');
var colors = require('colors/safe');

colors.setTheme({
    info: ['bold', 'green']
});

var pkg = JSON.parse(file.readFileAsString('package.json'));

var versionCompare = function(a, b) {
    var aArr = a.split('.');
    var bArr = b.split('.');
    var larger = false;
    for (var i = 0; i < 3; i++) {
        if (parseInt(aArr[i]) === parseInt(bArr[i])) {

        }
        else {
            larger = parseInt(aArr[i]) > parseInt(bArr[i]);
            break;
        }
    }
    return larger;
}

var webpack = require('webpack');


var browserSync = require('browser-sync');
var reload = browserSync.reload;
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var replace = require('gulp-just-replace');
var es3ify = require("gulp-es3ify");

gulp.task('pack_demo', function(cb) {
    webpack(require('./webpack.dev.js'), function (err, stats) {
        // 重要 打包过程中的语法错误反映在stats中
        console.log('webpack log:' + stats);
        if(err) cb(err);
        console.info('###### pack_demo done ######');
        cb();
    });
});

gulp.task('pack_build', function(cb) {
    gulp.src(['./src/**/*.js'])
        .pipe(babel({
            presets: ['react', 'es2015-loose', 'stage-1'],
            plugins: ['add-module-exports']
        }))
        .pipe(es3ify())
        .pipe(gulp.dest('build'))
        .on('end', function() {
            cb();
        })
});

gulp.task('sass_demo', function(cb) {
    gulp.src(['./demo/**/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(concat('demo.css'))
        .pipe(replace([{
            search: /\/\*#\ssourceMappingURL=([^\*\/]+)\.map\s\*\//g,
            replacement: '/* end for `$1` */\n'
        }]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
    console.info('###### sass_demo done ######');
    cb();
});

gulp.task('reload_by_js', ['pack_demo'], function () {
    reload();
});


gulp.task('reload_by_demo_css', ['sass_demo'], function () {
    reload();
});

gulp.task('server', [
    'pack_demo',
    'sass_demo'
], function() {
    browserSync({
        server: {
            baseDir: './',
            port: pkg.config.port
        },
        open: 'external'
    });

    gulp.watch(['src/**/*.js', 'demo/**/*.js'], ['reload_by_js']);

    gulp.watch('src/**/*.scss', ['reload_by_demo_css']);

    gulp.watch('demo/**/*.scss', ['reload_by_demo_css']);

});

gulp.task('default', ['pack_build'], function() {

});

gulp.task('publish', ['pack_build'], function() {
    setTimeout(function() {
        var questions = [
            {
                type: 'input',
                name: 'version',
                message: 'please enter the package version to publish (should be xx.xx.xx)',
                default: pkg.version,
                validate: function(input) {
                    if (/\d+\.\d+\.\d+/.test(input)) {
                        if (versionCompare(input, pkg.version)) {
                            return true;
                        }
                        else {
                            return "the version you entered should be larger than now"
                        }
                    }
                    else {
                        return "the version you entered is not valid"
                    }
                }
            },
            {
                type: 'input',
                name: 'branch',
                message: 'which branch you want to push',
                default: 'master'
            },
            {
                type: 'input',
                name: 'npm',
                message: 'which npm you want to publish',
                default: 'npm',
                validate: function(input) {
                    if (/npm/.test(input)) {
                        return true;
                    }
                    else {
                        return "it seems not a valid npm"
                    }
                }
            }
        ];
        inquirer.prompt(questions, function(answers) {
            pkg.version = answers.version;
            file.writeFileFromString(JSON.stringify(pkg, null, ' '), 'package.json');
            console.log(colors.info('#### Git Info ####'));
            spawn.sync('git', ['add', '.'], {stdio: 'inherit'});
            spawn.sync('git', ['commit', '-m', 'ver. ' + pkg.version], {stdio: 'inherit'});
            spawn.sync('git', ['push', 'origin', answers.branch], {stdio: 'inherit'});
            console.log(colors.info('#### Npm Info ####'));
            spawn.sync(answers.npm, ['publish'], {stdio: 'inherit'});
        })
    }, 0)

});
