/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/12/31 - 18:33
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * ES2015 JS ライブラリ
 *
 * `babels/src` でファイルを作成します
 * fileName object を編集し出力ファイル名を設定します
 * dir.app.babel へ出力されます
 */

import { module } from '../gulp_setting.babel';

const gulp = module.gulp;
/**
 * gulp-load-plugins instance
 * ```
 * import gulpLoadPlugins from 'gulp-load-plugins';
 * const $ = gulpLoadPlugins();
 * ```
 * @type {*}
 */
const $ = module.$;
/**
 * @type {{
 *  reload: function,
 *  browserSync: function,
 *  runSequence: function,
 *  webpack: function,
 *  del: function,
 * }}
 */
const $$ = module.$$;

const dir = module.dir;

const patterns = module.patterns;

const wpk = module.wpk;

// --------------------------------------
//  TASK
// --------------------------------------

const files = [
  `${dir.babels.src}/**/*.{js,jsx}`,
];

const fileName = {
  raw: 'app.js',
  bundle: 'app.bundle.js',
};

// ESLint
// --------------------------------------
gulp.task('babels:lint', () => gulp.src(files)
  .pipe($.eslint({ useEslintrc: true }))
  .pipe($.eslint.format())
  .pipe($.eslint.failAfterError())
  .pipe($.size({ title: '*** babels:lint ***' }))
);

// babel
// --------------------------------------
gulp.task('babels:babel', () => gulp.src(files)
  .pipe($.babel({
    presets: [
      // 'es2017',
      // 'es2016',
      'es2015',
      'react',
      'stage-0',
    ],
    plugins: ['transform-runtime'],
  }))
  .pipe($.replaceTask({ patterns }))
  .pipe(gulp.dest(dir.babels.compile))
  .pipe($.size({ title: '*** babels:babel ***' }))
);

// webpack [DEV]
// --------------------------------------
gulp.task('babels:pack:dev', (callback) => {
  const config = Object.assign({}, wpk);
  // remove, since webpack 2.x, @see https://webpack.js.org/guides/migrating/
  // config.plugins = [
  //   new $$.webpack.optimize.DedupePlugin(),
  // ];
  config.entry = `${wpk.entry}/babels/01_compile/${fileName.raw}`;
  // config.output.path = dir.babels.dist;
  config.output.path = `${wpk.entry}/babels/02_dest`;
  config.output.filename = fileName.bundle;
  // webpack
  return $$.webpack(config, (error, stats) => {
    if (error) {
      throw new $.util.PluginError('webpack', error);
    }
    $.util.log('[webpack:dev]', stats.toString({
      colors: true,
      progress: true,
    }));
    callback();
  });
});

// webpack [BUILD]
// --------------------------------------
gulp.task('babels:pack:build', (callback) => {
  // const config = Object.create(wpk);
  const config = Object.assign({}, wpk);
  config.plugins = [
    // remove, since webpack 2.x, @see https://webpack.js.org/guides/migrating/
    // new $$.webpack.optimize.DedupePlugin(),
    new $$.webpack.optimize.UglifyJsPlugin({ compress: { warnings: true } }),
  ];
  config.entry = `${config.entry}/babels/01_compile/${fileName.raw}`;
  config.output.path = dir.app.bundle;
  config.output.filename = fileName.bundle;
  // webpack
  return $$.webpack(config, (error, stats) => {
    if (error) {
      throw new $.util.PluginError('webpack', error);
    }
    $.util.log('[webpack:build]', stats.toString({
      colors: true,
      progress: true,
    }));
    callback();
  });
});

// copy
// --------------------------------------
gulp.task('babels:copy', () =>
  gulp.src(
    [
      // `${dir.app.root}/**/*.bundle.js`,
      `${wpk.entry}/babels/02_dest/**/*.bundle.js`,
    ]
  )
    .pipe($.debug({ title: '[BABELS]' }))
    // .pipe(gulp.dest(dir.dist.root))
    .pipe(gulp.dest(dir.app.js))
    .pipe($.size({ title: '*** babels:copy ***' }))
);

// --------------------------------------
//  TASK > SEQUENCE
// --------------------------------------
gulp.task('babels:dev', callback =>
  $$.runSequence(
    'babels:lint',
    'babels:babel',
    'babels:pack:dev',
    'babels:copy',
    callback,
  )
);

gulp.task('babels:build', callback =>
  $$.runSequence(
    // 'babels:lint',
    'babels:babel',
    'babels:pack:build',
    'babels:copy',
    callback,
  )
);
