import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import dartSass from 'dart-sass'
import cleanCSS from 'gulp-clean-css'
import gulpIf from 'gulp-if';
import sourceMaps from 'gulp-sourcemaps'
import yargs from 'yargs';

import webpack from 'webpack-stream';

const sass = gulpSass(dartSass);



const PRODUCTION = yargs.argv.prov;

const paths = {
      style : {
        src : './assets/src/scss/bundle.scss',
        dest : './assets/dest/css'
      },
      admin_style : {
        src :  './assets/src/scss/admin-bundle.scss',
        dest : './assets/dest/css'
      },

      scripts : {
        src : './assets/src/js/bundle.js' ,
        dest : './assets/dest/js'
      },

      admin_scripts : {
        src :  './assets/src/js/admin-bundle.js',
        dest : './dest/js'
      }
  }

export const style = () => {
    return gulp.src(paths.style.src)
    .pipe( gulpIf( !PRODUCTION , sourceMaps.init() ) )
    .pipe(sass().on('error' , sass.logError) )
    .pipe( gulpIf ( PRODUCTION , cleanCSS({ compatibility : 'ie8' }) ) )
    .pipe( gulpIf( !PRODUCTION , sourceMaps.write() ) )
    .pipe(gulp.dest(paths.style.dest));
}

export const adminStyle = () => {
  return gulp.src(paths.admin_style.src)
  .pipe( gulpIf( !PRODUCTION , sourceMaps.init() ) )
  .pipe(sass().on('error' , sass.logError) )
  .pipe( gulpIf ( PRODUCTION , cleanCSS({ compatibility : 'ie8' }) ) )
  .pipe( gulpIf( !PRODUCTION , sourceMaps.write() ) )
  .pipe(gulp.dest(paths.admin_style.dest));
}

export const scripts = () => {
    return gulp.src(paths.scripts.src)
    .pipe( webpack({
        module : {
            rules: [
                {
                  test: /\.js$/, // or your specific file types
                  exclude: /node_modules/,
                  use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                  }
                },
                // add other rules here as needed
              ]
        },
        output : {
            filename: 'bundle.js'
        },
        mode : 'development',
        devtool : !PRODUCTION ? 'inline-source-map' : false
    }) )
    .pipe( gulp.dest( paths.scripts.dest ) );
}

export const admin_scripts = () => {
  return gulp.src(paths.admin_scripts.src)
  .pipe( webpack({
      module : {
          rules: [
              {
                test: /\.js$/, // or your specific file types
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              },
              // add other rules here as needed
            ]
      },
      output : {
          filename: 'admin-bundle.js'
      },
      mode : 'development',
      devtool : !PRODUCTION ? 'inline-source-map' : false
  }) )
  .pipe( gulp.dest( paths.scripts.dest ) );
}

 

export const watch = () => {
    return gulp.watch( 'assets/src/**/*.*' , gulp.parallel(style , scripts  ));
}


export const dev = gulp.parallel(style , adminStyle , scripts , admin_scripts  );

export default dev;