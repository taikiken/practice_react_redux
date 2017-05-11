/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/05/08 - 19:51
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

import { default as ReducerTypes } from '../ReducerTypes';

/**
 * request default state
 * ```
 * list: [],
 * loading: '',
 * error: '',
 * type: 'INIT_XXX',
 * id: 'redux-ul-ex3',
 * mode: 'ex3',
 * ```
 * @type {{list: Array, loading: string, error: string, type: string, id: string, mode: string}}
 * @private
 * @static
 */
const initialState = {
  list: [],
  loading: '',
  error: '',
  type: 'INIT_XXX',
  id: 'redux-ul-ex3',
  mode: 'ex3',
};

/**
 * Ajax 取得データをストックします
 * @type {Array}
 * @private
 * @static
 */
const record = [];

/**
 * Ajax 取得 JSON を加工します
 * @param {Array<Object>} response JSON.response
 * @returns {Array} 表示リストに使用します
 */
const update = (response) => {
  const list = record;
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
  return list;
};

/**
 * ajax request {@link ReducerTypes} により state を変化させます
 * @param {Object} [state=initialState] 状態
 * @param {Object} action redux action Object
 * @returns {*} state を返します
 */
const requestReducer = (state = initialState, action) => {
  console.log('requestReducer', action.type, state, action);
  const assignState = Object.assign({}, state);
  switch (action.type) {
    case ReducerTypes.BUTTON_CLICK: {
      assignState.loading = 'loading';
      const previous = action.list || [];
      assignState.list = previous.concat(state.list);
      return assignState;
    }
    case ReducerTypes.AJAX_START: {
      assignState.loading = 'loading';
      const previous = action.list || [];
      assignState.list = previous.concat(state.list);
      return assignState;
    }
    case ReducerTypes.AJAX_COMPLETE: {
      assignState.loading = '';
      const response = action.data.response || [];
      assignState.list = update(response);// .concat(state.list);
      console.log('requestReducer ReducerTypes.AJAX_COMPLETE', assignState, action.data.response);
      return assignState;
    }
    case ReducerTypes.AJAX_ERROR: {
      assignState.loading = '';
      assignState.error = state.error;
      assignState.list = record;
      return assignState;
    }
    default: {
      return state;
    }
  }
};

/**
 * ajax request {@link ReducerTypes} により state を変化させます
 * @param {Object} [state=initialState] 状態
 * @param {Object} action redux action Object
 * @returns {*} state を返します
 */
export default requestReducer;
