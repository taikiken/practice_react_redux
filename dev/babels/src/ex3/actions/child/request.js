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

// import Ajax from '../../net/Ajax';
import AjaxThunk from '../../../net/AjaxThunk';

// reducers types
import ReducerTypes from '../../reducers/ReducerTypes';

// ---------------------------------------
/**
 * redux-thunk 可能な `fetch` request を行います
 * @type {AjaxThunk}
 */
const ajax = new AjaxThunk();

/**
 * fetch success で呼び出され
 * 取得 JSON data を受信し
 * {@link ReducerTypes.AJAX_COMPLETE} を返します
 * @param {*} data fetch 取得 JSON data
 * @returns {{type: *, data: *}} request reducer が受け取ります
 */
const receivePost = data => (
  {
    type: ReducerTypes.AJAX_COMPLETE,
    data,
  }
);
// const receivePost = (data) => {
//   console.log('Ajax.receivePost', data, ReducerTypes.AJAX_COMPLETE);
//   return {
//     type: ReducerTypes.AJAX_COMPLETE,
//     data,
//   };
// };

/**
 * fetch error で呼び出され
 * reject Error instance を引数として受信し
 * {@link ReducerTypes.AJAX_ERROR} を返します
 * @param {Error} error reject Error instance
 * @returns {{type: *, error: *}} request reducer が受け取ります
 */
const receiveError = error => (
  {
    type: ReducerTypes.AJAX_ERROR,
    error,
  }
);
// const receiveError = (error) => {
//   console.log('Ajax.receiveError', error, ReducerTypes.AJAX_ERROR);
//   return {
//     type: ReducerTypes.AJAX_ERROR,
//     error,
//   };
// };

/**
 * fetch request 開始を通知します
 * {@link ReducerTypes.AJAX_START} を返します
 * @returns {{type: *}} request reducer が受け取ります
 */
const requestPost = () => (
  {
    type: ReducerTypes.AJAX_START,
  }
);
// const requestPost = () => {
//   console.log('requestPost ==================');
//   return {
//     type: ReducerTypes.AJAX_START,
//   };
// };

/**
 * request action - redux-thunk
 * - `dispatch(requestPost())`
 * - `return ajax.start('/api/json/test.json')`
 * @returns {Function} fetch - can Promise method を返します
 */
const requestAction = () => (dispatch) => {
  console.log('requestAction');
  dispatch(requestPost());
  return ajax.start('/api/json/test.json')
    .then((json) => {
      // console.log('ajax.done.then -----------------------', json);
      dispatch(receivePost(json));
    })
    .catch((error) => {
      // console.log('ajax.catch.error -----------------------', error);
      dispatch(receiveError(error));
    });
};
// const requestAction = () => {
//   console.log('requestAction');
//   return function (dispatch) {
//     dispatch(requestPost());
//     return ajax.start('/api/json/test.json')
//       .then((json) => {
//         // console.log('ajax.done.then -----------------------', json);
//         dispatch(receivePost(json));
//       })
//       .catch((error) => {
//         // console.log('ajax.catch.error -----------------------', error);
//         dispatch(receiveError(error));
//       });
//   };
// };
/**
 * request action - redux-thunk
 * - `dispatch(requestPost())`
 * - `return ajax.start('/api/json/test.json')`
 * @returns {Function} fetch - can Promise method を返します
 * @type {Function}
 */
export default requestAction;
