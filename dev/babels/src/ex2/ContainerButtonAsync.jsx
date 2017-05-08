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

// // ------------------
// // async, done / fail
// const asyncDone = ({ dispatch }) => {
//   console.log('asyncDone', dispatch);
//   dispatch(ListActionsAsync.done(dispatch));
// };
//
// const asyncFail = ({ dispatch }) => {
//   console.log('asyncDone', dispatch);
//   dispatch(ListActionsAsync.fail(dispatch));
// };
//
// const done = connect()(asyncDone);
// const fail = connect()(asyncFail);

// ------------------
// button / click
/**
 * action instance
 * @type {ListActionsAsync}
 */
const actionsAsync = new ListActionsAsync();
/**
 * {@link Button} component へ click handler を設定します
 * @param {*} dispatch redact dispatch
 * @returns {XML} {@link Button} component
 */
const containerButtonAsyncDispatch = ({ dispatch }) =>
  <Button
    maker={() => dispatch(actionsAsync.click(dispatch))}
  />;

/**
 * containerButtonAsyncDispatch.maker type を設定します
 * @type {{dispatch: function}}
 */
containerButtonAsyncDispatch.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

// ---------------------------------
// redux connect
/**
 * redux connect された {@link containerButtonAsyncDispatch}
 * @type {*}
 */
const ContainerButton = connect()(containerButtonAsyncDispatch);
// const done = connect()(asyncDone);
// const fail = connect()(asyncFail);
// console.log('', done, fail);

// ---------------------------------
/**
 * button component
 * @type {{ContainerButton: function}}
 */
const ContainerButtonAsync = {
  ContainerButton,
  // done,
  // fail,
};

/**
 * button component
 * @type {{ContainerButton: function}}
 */
export default ContainerButtonAsync;
// export default click;
