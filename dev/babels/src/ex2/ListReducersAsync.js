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

export default class ListReducersAsync {
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
  // /**
  //  * Ul default state
  //  * - id - `redux-ul`
  //  * - mode - `ex1`
  //  * - list - []
  //  * @returns {{
  //  *  request: [*],
  //  *  loading: string,
  //  *  error: string,
  //  *  type: string,
  //  *  id: string,
  //  *  mode: string
  //  * }}
  //  */
  static get defaultState() {
    return {
      list: [],
      loading: 'loading',
      error: '',
      type: '',
      id: 'redux-ul-ex2',
      mode: 'ex2',
    };
  }
  constructor() {
    this.list = [];
    this.update = this.update.bind(this);
  }
  updateList(response) {
    const list = this.list;
    let index = list.length;
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
  update(state = {}, action) {
    const clone = Object.assign({}, ListReducersAsync.defaultState);
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
      case ListReducersAsync.START: {
        console.log(`ListReducersAsync.update ${action.type}`, state, action, clone);
        clone.loading = 'loading';
        return clone;
      }
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
