/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/05/10 - 17:43
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

// react
import React from 'react';
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';

// component
import Button from '../../components/Button';

// actions
import actions from '../actions';

// store
// import store from '../store/';

/**
 * state を redux 経由し props 変換します
 * @param {*} button 更新される state {button, request}
 * @returns {*} 引数 state を返します
 */
const mapStateToProps = ({ button }) => (button);
// const mapStateToProps = ({ button }) => {
//   console.log('Button mapStateToProps state', button);
//   return button;
// };

/**
 * {@link Button} component を作成し
 * onClick handler で実行する `redux actions` をキックする関数を props 定義します
 * - dispatch - action method を実行する redux.dispatch
 * - loading - ajax 処理中フラッグに使用する
 * @param {function} dispatch redux - dispatch
 * @param {string} [loading=''] loading | '', ajax request 中フラッグ
 * @returns {XML} Button component を返します
 */
const containerButtonAsyncDispatch = ({ dispatch, loading = '' }) => (
  <Button
    maker={() => {
      dispatch(actions.buttonAction());
      dispatch(actions.requestAction());
    }}
    loading={loading}
  />
);
// const containerButtonAsyncDispatch = ({ dispatch, loading = '' }) => {
//   console.log('containerButtonAsyncDispatch', loading);
//   return (
//     <Button
//       maker={() => {
//         dispatch(actions.buttonAction());
//         dispatch(actions.requestAction());
//       }}
//       loading={loading}
//     />
//   );
// };
//
// const containerButtonAsyncDispatch = ({ loading = '' }) =>
//   <Button
//     maker={() => store.dispatch(actions.buttonAction(), actions.requestAction())}
//     loading={loading}
//   />;

/**
 * containerButtonAsyncDispatch.maker type を設定します
 * - dispatch - action method を実行する redux.dispatch
 * - loading - ajax 処理中フラッグに使用する
 * @type {{dispatch: function, loading: string}}
 */
containerButtonAsyncDispatch.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.string.isRequired,
};

/**
 * react-redux.connect で `mapStateToProps`, `containerButtonAsyncDispatch` します
 */
const ContainerButton = connect(mapStateToProps)(containerButtonAsyncDispatch);
/**
 * react-redux.connect で `mapStateToProps`, `containerButtonAsyncDispatch` します
 * @type {*}
 */
export default ContainerButton;
