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

import { default as ReducerTypes } from '../ReducerTypes';

/**
 * button reducer default state
 * ```
 * loading: '',
 * error: '',
 * type: '',
 * id: 'redux-ul-ex3',
 * mode: 'ex3',
 * ```
 * @private
 * @static
 * @type {{loading: string, error: string, type: string, id: string, mode: string}}
 */
const buttonState = {
  loading: '',
  error: '',
  type: '',
  id: 'redux-ul-ex3',
  mode: 'ex3',
};

/**
 * {@link ReducerTypes} により state を変化させます
 * - {@link ReducerTypes.BUTTON_CLICK}: loading: 'loading'
 * - {@link ReducerTypes.AJAX_COMPLETE}, {@link ReducerTypes.AJAX_ERROR}: loading: ''
 * @param {Object} [state=buttonState] 状態
 * @param {Object} action redux action Object
 * @returns {*} state を返します
 * @private
 * @static
 */
const buttonReducer = (state = buttonState, action) => {
  console.log('buttonReducer', state, action);
  const assignState = Object.assign({}, state);
  switch (action.type) {
    case ReducerTypes.BUTTON_CLICK: {
      assignState.loading = 'loading';
      return assignState;
    }
    case ReducerTypes.AJAX_COMPLETE:
    case ReducerTypes.AJAX_ERROR: {
      assignState.loading = '';
      return assignState;
    }
    default: {
      return state;
    }
  }
};

/**
 * ReducerTypes により state を変化させます
 * - {@link ReducerTypes.BUTTON_CLICK}: loading: 'loading'
 * - {@link ReducerTypes.AJAX_COMPLETE}, {@link ReducerTypes.AJAX_ERROR}: loading: ''
 * @param {Object} [state=buttonState] 状態
 * @param {Object} action redux action Object
 * @returns {*} state を返します
 */
export default buttonReducer;
