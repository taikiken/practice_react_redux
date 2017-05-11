/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/05/10 - 17:24
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * redux - reducer type を定義します
 */
export default class ReducerTypes {
  /**
   * redux - reducer type: BUTTON_CLICK
   * @returns {string} buttonClick
   */
  static get BUTTON_CLICK() {
    return 'buttonClick';
  }
  /**
   * redux - reducer type: AJAX_START
   * @returns {string} ajaxStart
   */
  static get AJAX_START() {
    return 'ajaxStart';
  }
  /**
   * redux - reducer type: AJAX_COMPLETE
   * @returns {string} ajaxComplete
   */
  static get AJAX_COMPLETE() {
    return 'ajaxComplete';
  }
  /**
   * redux - reducer type: AJAX_ERROR
   * @returns {string} ajaxError
   */
  static get AJAX_ERROR() {
    return 'ajaxError';
  }
}
