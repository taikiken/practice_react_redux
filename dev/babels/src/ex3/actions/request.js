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

import Ajax from '../../net/Ajax';

import { default as ReducerTypes } from '../reducers/ReducerTypes';

// const update = (response) => {
//
// };

const done = ({ data, dispatch }) => {
  console.log('Ajax.done', data, ReducerTypes.AJAX_COMPLETE);
  dispatch({
    type: ReducerTypes.AJAX_COMPLETE,
    data,
  });
};

const fail = ({ error, dispatch }) => {
  console.log('Ajax.fail', error);
  dispatch({
    type: ReducerTypes.AJAX_ERROR,
    error,
  });
};

const ajax = new Ajax(done, fail);
// eslint-disable-next-line arrow-body-style
const requestAction = (dispatch) => {
  console.log('requestAction');
  return ajax.start('/api/json/test.json', dispatch);
  // return function (dispatch) {
  //   console.log('requestAction Ajax.start dispatch', !!dispatch);
  //   return ajax.start('/api/json/test.json')
  //     .then(
  //       (json) => {
  //         console.log('ajax complete', json, dispatch);
  //       },
  //       (error) => {
  //         console.log('ajax error', error, dispatch);
  //       }
  //     );
  // };
  // return (dispatch, getState) => {
  //   console.log('requestAction Ajax.start dispatch', !!dispatch, getState());
  //   return dispatch(ajax.start('/api/json/test.json'));
  // };
};

export default requestAction;
