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

/**
 * {@link Ajax} を使用し JSON data を取得します
 */
export default class NetRequest {
  /**
   * {@link Ajax} instance を作成します
   * @param {string} path request path
   * @param {function} resolve success callback
   * @param {function} reject error callback
   */
  // constructor(path, resolve = this.done.bind(this), reject = this.fail.bind(this)) {
  constructor(path, resolve, reject) {
    /**
     * request path
     * @type {string}
     */
    this.path = path;
    /**
     * ajax instance
     * @type {Ajax}
     */
    this.ajax = new Ajax(resolve, reject);
  }
  /**
   * Ajax request 開始
   */
  start() {
    this.ajax.start(this.path);
  }
  // /**
  //  * Ajax success callback
  //  * @param {Object} data JSON data
  //  */
  // done(data) {
  //   console.warn('NetRequest.done', data, this);
  // }
  // /**
  //  * Ajax error callback
  //  * @param {Error} error ajax error
  //  */
  // fail(error) {
  //   console.warn('NetRequest.fail', error, this);
  // }
}
