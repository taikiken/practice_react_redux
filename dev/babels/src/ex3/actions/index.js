/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/05/10 - 17:44
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

import { default as buttonAction } from './child/button';
import { default as requestAction } from './child/request';

/**
 * redux - actions をまとめます
 * - {@link buttonAction} - `./child/button`
 * - {@link requestAction} - `./child/request`
 * @type {*}
 */
export default {
  buttonAction,
  requestAction,
};
