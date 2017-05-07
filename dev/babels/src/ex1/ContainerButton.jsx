/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/04/27 - 19:01
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

//
import { default as ListActions } from './ListActions';

/**
 * redux dispatch handler
 * @param {*} dispatch redux.dispatch
 * @returns {XML} {@link Button} を返します
 */
const containerButtonDispatch = ({ dispatch }) =>
  <Button
    maker={() => dispatch(ListActions.click())}
  />;

containerButtonDispatch.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
/**
 * {@link Button}
 * redux.connect - {@link containerButtonDispatch}
 * ```
 * containerButtonDispatch = ({ dispatch }) =>
 *  <Button
 *    maker={() => dispatch(ListActions.click())}
 *  />
 * // ----
 * connect()(containerButtonDispatch)
 * ```
 * @type {Connect|Function}
 */
const ContainerButton = connect()(containerButtonDispatch);

export default ContainerButton;
