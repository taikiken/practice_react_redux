/*!
 * @license inazumatv.com
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/04/23
 *
 * Copyright (c) 2011-2015 inazumatv.com, inc.
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 * @@version
 * @@buildTime
 */
// use strict は本来不要でエラーになる
// 無いと webpack.optimize.UglifyJsPlugin がコメントを全部削除するので記述する
/* eslint strict: [0, "global"] */

import 'whatwg-fetch';
import Promise from 'promise-polyfill';

// react
import { default as React } from 'react';
import { default as ReactDOM } from 'react-dom';

import { default as Ul } from './components/Ul';
import { default as Button } from './components/Button';

// ex1
import { default as CreateUlApp } from './ex1/CreateUlApp';

// ex2
import { default as CreateUlAppAsync } from './ex2/CreateUlAppAsync';

// To add to window
if (!window.Promise) {
  window.Promise = Promise;
}

/**
 * global object
 * @type {{
 *  React: React,
 *  ReactDOM: ReactDOM,
 *  Ul: *,
 *  Button: *,
 *  CreateUlApp: *,
 *  CreateUlAppAsync: *
 * }}
 */
const PRACTICE_REACT = {
  React,
  ReactDOM,
  Ul,
  Button,
  CreateUlApp,
  CreateUlAppAsync,
};

self.PRACTICE_REACT = PRACTICE_REACT;
