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

/**
 * reducer を定義します
 * - type を設定
 *  - CLICK
 *  - COMPLETE
 *  - ERROR
 *
 * type 毎の戻り値を設定します
 */
export default class ListReducersAsync {
  /**
   * button click -> ajax request
   * @event CLICK
   * @returns {string} ListTypesClick
   */
  static get CLICK() {
    return 'ListTypesAsyncClick';
  }
  // static get START() {
  //   return 'ListTypesAsyncStart';
  // }
  /**
   * Ajax success
   * @event COMPLETE
   * @returns {string} ListTypesAsyncComplete
   */
  static get COMPLETE() {
    return 'ListTypesAsyncComplete';
  }
  /**
   * Ajax error
   * @event ERROR
   * @returns {string} ListTypesAsyncError
   */
  static get ERROR() {
    return 'ListTypesAsyncError';
  }
  // ----------------------------------------
  // CONSTRUCTOR
  // ----------------------------------------
  /**
   * list 初期化し `update` bind します
   */
  constructor() {
    /**
     * JSON 配列を加算保持します
     * @type {Array}
     */
    this.list = [];
    /**
     * bound {@link this.update}
     * @type {function}
     */
    this.update = this.update.bind(this);
  }
  // ----------------------------------------
  // GETTER
  // ----------------------------------------
  /**
   * state default 値
   * @returns {{
   *  list: Array,
   *  loading: string,
   *  error: string,
   *  type: string,
   *  id: string,
   *  mode: string
   * }}
   * default value
   */
  get defaultState() {
    return {
      list: this.list,
      loading: '',
      error: '',
      type: '',
      id: 'redux-ul-ex2',
      mode: 'ex2',
    };
  }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * JSON data を既存配列へ追加し
   * id, link, message data へ変換します
   * @param {Array<Object>} response JSON 戻り値
   */
  updateList(response) {
    const list = this.list;
    let index = list.length;
    // 既存配列へ変換後 object を追加します
    response.map((data) => {
      const id = `${data.id}-${index}`;
      const link = `/b/${id}`;
      const message = `this is a ${id}`;
      list.push({
        id,
        link,
        message,
      });
      index += 1;
      return data;
    });
  }
  /**
   * dispatch で呼び出されます
   * @param {Object} [state={}] 状態情報
   * @param {object} action 更新された state
   * @returns {*} component で使用する props 変換された state
   */
  update(state = {}, action) {
    const clone = Object.assign({}, this.defaultState);
    clone.type = action.type;
    // console.log('update this', this, state, action);
    switch (action.type) {
      case ListReducersAsync.CLICK: {
        console.log(`ListReducersAsync.update ${action.type}`, action, clone, this);
        clone.loading = 'loading';
        // const cloneButton = clone;
        // clone.list = action.list.concat(clone.list);
        return clone;
      }
      // case ListReducersAsync.START: {
      //   console.log(`ListReducersAsync.update ${action.type}`, state, action, clone);
      //   clone.loading = 'loading';
      //   return clone;
      // }
      case ListReducersAsync.COMPLETE: {
        console.log(`ListReducersAsync.update ${action.type}`, action);
        this.updateList(action.data.response);
        // clone.request = action.data;
        clone.loading = '';
        clone.list = this.list;
        return clone;
      }
      case ListReducersAsync.ERROR: {
        console.log(`ListReducersAsync.update ${action.type}`, state, action, clone);
        clone.error = action.error;
        clone.loading = '';
        return clone;
      }
      default: {
        return clone;
      }
    }
  }
}
