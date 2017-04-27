/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/04/27 - 17:12
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

// redux
import { connect } from 'react-redux';

import { default as Ul } from '../components/Ul';

import { default as ListTypes } from './ListTypes';

const { id, mode } = ListTypes.defaultState;

/**
 * state -> prop convert
 * ```
 * // ES5
 * var mapStateToProps = function mapStateToProps(state) {
 *  return { list: state.list };
 * };
 * // ES2015
 * const mapStateToProps = state => ({ list: state.list });
 * ```
 * @param {Object} state nextState
 * @returns {Object} nextProps
 */
const mapStateToProps = (state) => {
  console.log('mapStateToProps state', state);
  return {
    id,
    mode,
    list: state.list,
  };
};

const ContainerUl = connect(mapStateToProps)(Ul);

export default ContainerUl;
