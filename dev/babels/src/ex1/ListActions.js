/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/04/27 - 15:28
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

import { default as ListTypes } from './ListTypes';

/**
 * li - 更新リスト {@link ListTypes.defaultState}
 * @type {Array<Object>}
 */
const { list } = ListTypes.defaultState;

/**
 * redux.connect 対象 method 管理します
 */
export default class ListActions {
  /**
   * button click で実行し Object を作成します
   * @param {*} index id に加える index - unique key を保証すること！
   * @returns {{id: string, link: string, message: string}} 作成 object を返します
   */
  static makeList(index) {
    return {
      id: `id-${index}`,
      link: `/a/${index}`,
      message: `index is ${index}`,
    };
  }
  /**
   * {@link ContainerButton}.containerButtonDispatch
   * @returns {{type: string, list: Array}} action
   */
  static click() {
    // const { list } = ListTypes.defaultState;
    console.log('ListActions.click', list);
    list.push(ListActions.makeList(Date.now()));
    return {
      type: ListTypes.CLICK,
      list,
    };
  }
}
