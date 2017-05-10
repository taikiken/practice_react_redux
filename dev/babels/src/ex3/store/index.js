/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/05/10 - 18:12
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

import { applyMiddleware, createStore } from 'redux';

// middleware
import reducers from '../reducers';

import middleware from './middleware';

console.log('reducers', reducers);

const store = createStore(
  reducers,
  applyMiddleware(
    middleware.logger,
    middleware.thunk
  )
);
console.log('store', store);
export default store;
