/**
 * @license inazumatv.com
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/05/04
 *
 * Copyright (c) 2011-2015 inazumatv.com, inc.
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 */

import { default as Ajax } from '../net/Ajax';

export default class NetRequest {
  constructor(path, resolve = this.done.bind(this), reject = this.fail.bind(this)) {
    this.path = path;
    this.ajax = new Ajax(resolve, reject);
  }
  start() {
    this.ajax.start(this.path);
  }
  done(data) {
    console.warn('NetRequest.done', data, this);
  }
  fail(error) {
    console.warn('NetRequest.fail', error, this);
  }
}
