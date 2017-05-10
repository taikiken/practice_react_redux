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
import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';

// redux
import { connect } from 'react-redux';

// component
import { default as Button } from '../../components/Button';

// actions
import { default as actions } from '../actions';

// store
// import store from '../store/';

/**
 * state を redux 経由し props 変換します
 * @param {*} button 更新される state {button, request}
 * @returns {*} 引数 state を返します
 */
const mapStateToProps = ({ button }) => {
  console.log('Button mapStateToProps state', button);
  return button;
};

const containerButtonAsyncDispatch = ({ dispatch, loading = '' }) =>
  <Button
    maker={() => dispatch(actions.buttonAction(), actions.requestAction(dispatch))}
    loading={loading}
  />;

//
// const containerButtonAsyncDispatch = ({ loading = '' }) =>
//   <Button
//     maker={() => store.dispatch(actions.buttonAction(), actions.requestAction())}
//     loading={loading}
//   />;

/**
 * containerButtonAsyncDispatch.maker type を設定します
 * @type {{dispatch: function, loading: string}}
 */
containerButtonAsyncDispatch.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.string.isRequired,
};

const ContainerButton = connect(mapStateToProps)(containerButtonAsyncDispatch);
export default ContainerButton;
