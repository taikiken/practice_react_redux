/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/04/27 - 14:31
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * redux reducer
 * - type set
 *   - ADD
 *   - CLICK
 * - createStore(ListTypes.update)
 */
export default class ListTypes {
  /**
   * button click -> ADD
   * @event CLICK
   * @returns {string} ListTypesClick
   */
  static get CLICK() {
    return 'ListTypesClick';
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
      id: 'redux-ul',
      mode: 'ex1',
      list: [],
    };
  }
  /**
   * redux.creatStore 対象 method
   * - action.type: {@link ListTypes.CLICK} - list と action.list を結合します
   * - action.type: ListTypes.CLICK 以外 - {@link ListTypes.defaultState} を返します
   * @param {Object} state 状態
   * @param {Object} action update 状態
   * @returns {*} 更新後状態
   */
  static update(state = {}, action) {
    const clone = Object.assign({}, ListTypes.defaultState);
    switch (action.type) {
      // for button click
      case ListTypes.CLICK: {
        console.log(`ListTypes.update ${action.type}`, state, action, clone);
        // const cloneButton = clone;
        clone.list = action.list.concat(clone.list);
        return clone;
      }
      // for @@redux/INIT
      default: {
        console.log(`ListTypes.update default ${action.type}`, state, action, clone);
        return clone;
      }
    }
  }
}
