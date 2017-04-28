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

export default class ListTypesAsync {
  /**
   * button click -> ajax request
   * @event CLICK
   * @returns {string} ListTypesClick
   */
  static get CLICK() {
    return 'ListTypesAsyncClick';
  }
  static get START() {
    return 'ListTypesAsyncStart';
  }
  static get COMPLETE() {
    return 'ListTypesAsyncComplete';
  }
  static get ERROR() {
    return 'ListTypesAsyncError';
  }
  /**
   * Ul default state
   * - id - `redux-ul`
   * - mode - `ex1`
   * - list - []
   * @returns {{id: string, mode: string, list: Array}} Ul default state を返します
   */
  static get defaultState() {
    return {
      id: 'redux-ul-ex2',
      mode: 'ex2',
      list: [],
    };
  }
}
