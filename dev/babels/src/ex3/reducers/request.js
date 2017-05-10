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

import { default as ReducerTypes } from './ReducerTypes';

const initialState = {
  list: [],
  loading: '',
  error: '',
  type: 'INIT_XXX',
  id: 'redux-ul-ex3',
  mode: 'ex3',
};

const record = [];

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

const requestReducer = (state = initialState, action) => {
  console.log('requestReducer', action.state, state, action);
  const assignState = Object.assign({}, state);
  switch (action.type) {
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

export default {
  initialState,
  requestReducer,
};
