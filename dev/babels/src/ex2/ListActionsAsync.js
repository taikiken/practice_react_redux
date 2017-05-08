/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/04/28 - 18:41
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

// net
import { default as NetRequest } from './NetRequest';

// reducer
import { default as ListReducersAsync } from './ListReducersAsync';

/**
 * redux action 定義します
 */
export default class ListActionsAsync {
  /**
   * Ajax success {@link ListReducersAsync.COMPLETE} を定義します
   * @param {Object} data - JSON
   * @returns {{type: string, data: object}} ListReducersAsync.COMPLETE state
   */
  static done(data) {
    console.log('ListActionsAsync.done', data);
    return {
      type: ListReducersAsync.COMPLETE,
      data,
    };
  }
  /**
   * Ajax error {@link ListReducersAsync.ERROR} を定義します
   * @param {Error} error Ajax error
   * @returns {{type: (number|Event|string), error: *}} ListReducersAsync.ERROR state
   */
  static fail(error) {
    console.log('ListActionsAsync.fail', error);
    return {
      type: ListReducersAsync.ERROR,
      error,
    };
  }
  // ----------------------------------------
  // CONSTRUCTOR
  // ----------------------------------------
  /**
   * JSON path から {@link NetRequest} instance を作成します
   * @param {string} [path=/api/json/test.json] JSON path
   */
  constructor(path = '/api/json/test.json') {
    /**
     * NetRequest instance
     * @type {NetRequest}
     */
    this.request = new NetRequest(path, this.done.bind(this), this.fail.bind(this));
    /**
     * react dispatch
     * @type {?function}
     */
    this.dispatch = null;
  }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * {@link Button} click 後呼び出され {@link NetRequest}.start します
   * @param {function} dispatch property へ保存します
   * @returns {{type: string}} {@link ListReducersAsync.CLICK}
   */
  click(dispatch) {
    this.dispatch = dispatch;
    this.request.start();
    return {
      type: ListReducersAsync.CLICK,
    };
  }
  /**
   * Ajax success callback
   * @param {Object} data JSON data
   */
  done(data) {
    this.dispatch(ListActionsAsync.done(data));
  }
  /**
   * Ajax error callback
   * @param {Error} error Ajax error
   */
  fail(error) {
    this.dispatch(ListActionsAsync.fail(error));
  }
}
