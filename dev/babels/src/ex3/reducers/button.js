/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/05/08 - 19:50
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

import { default as ReducerTypes } from './ReducerTypes';

const buttonState = {
  loading: '',
  error: '',
  type: '',
  id: 'redux-ul-ex3',
  mode: 'ex3',
};

const buttonReducer = (state = buttonState, action) => {
  console.log('buttonReducer', state, action);
  switch (action.type) {
    case ReducerTypes.AJAX_START: {
      const assignState = Object.assign({}, buttonState);
      assignState.loading = 'loading';
      return assignState;
    }
    default: {
      return state;
    }
  }
};

export default {
  buttonState,
  buttonReducer,
};
