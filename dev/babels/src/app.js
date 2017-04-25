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

import { default as React } from 'react';
import { default as ReactDOM } from 'react-dom';

import { default as Ul } from './dom/Ul';
import { default as Button } from './dom/Button';

const PRACTICE_REACT = {
  React,
  ReactDOM,
  Ul,
  Button,
};

self.PRACTICE_REACT = PRACTICE_REACT;
