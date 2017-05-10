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

import button from './button';
import request from './request';
//
// // middleware
// import middleware from './middleware';

// console.log('buttonReducer', button.buttonReducer);
// console.log('logger', middleware.logger);

const reducers = combineReducers(
  {
    button: button.buttonReducer,
    request: request.requestReducer,
  }
);

// export default {
//   middleware,
//   all,
// };
export default reducers;

