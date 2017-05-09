/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/04/28 - 18:40
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
import { default as Button } from '../components/Button';

// ex2
import { default as ListActionsAsync } from './ListActionsAsync';

// ------------------
// button / click

/**
 * state を redux 経由し props 変換します
 * @param {*} state 更新される state
 * @returns {*} 引数 state を返します
 */
const mapStateToProps = (state) => {
  console.log('Button mapStateToProps state', state);
  return state;
};

/**
 * action instance
 * @type {ListActionsAsync}
 */
const actionsAsync = new ListActionsAsync();
/**
 * {@link Button} component へ click handler を設定します
 * @param {*} dispatch redux dispatch
 * @param {*} loading loading state
 * @returns {XML} {@link Button} component
 */
const containerButtonAsyncDispatch = ({ dispatch, loading }) =>
  <Button
    maker={() => dispatch(actionsAsync.click(dispatch))}
    loading={loading}
  />;

/**
 * containerButtonAsyncDispatch.maker type を設定します
 * @type {{dispatch: function, loading: string}}
 */
containerButtonAsyncDispatch.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.string.isRequired,
};

// ---------------------------------
// redux connect
// @see https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
// `connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])`
// - [mapStateToProps(state, [ownProps]): stateProps] (Function)
// - [mapDispatchToProps(dispatch, [ownProps]): dispatchProps] (Object or Function)
// - [mergeProps(stateProps, dispatchProps, ownProps): props] (Function)
// - [options] (Object)
//
// @see https://github.com/reactjs/react-redux/blob/master/docs/api.md#returns
// Returns
//
// A higher-order React component class that passes state and action creators into your component
// derived from the supplied arguments.
// This is created by connectAdvanced, and details of this higher-order component are covered there.
/**
 * redux connect された {@link containerButtonAsyncDispatch}
 * @type {*}
 */
const ContainerButtonAsync = connect(mapStateToProps)(containerButtonAsyncDispatch);

// // ---------------------------------
// /**
//  * button component
//  * @type {{ContainerButton: function}}
//  */
// const ContainerButtonAsync = {
//   ContainerButton,
//   // done,
//   // fail,
// };
//
/**
 * button component
 * ```
 * ContainerButtonAsync = connect(mapStateToProps)(containerButtonAsyncDispatch)
 * ```
 * @type {*}
 */
export default ContainerButtonAsync;
