/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/05/10 - 16:52
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

import { combineReducers } from 'redux';

import button from './child/button';
import request from './child/request';

/**
 * redux - combineReducers します
 * - {@link button}
 * - {@link request}
 * @type {Reducer<S>}
 */
const reducers = combineReducers({
  button,
  request,
});

/**
 * redux - combineReducers します
 * - {@link button}
 * - {@link request}
 * @type {Reducer<S>}
 */
export default reducers;
