/**
 * @license inazumatv.com
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/05/05
 *
 * Copyright (c) 2011-2015 inazumatv.com, inc.
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 */

// redux
import { connect } from 'react-redux';

// ------
import { default as Ul } from '../components/Ul';

/**
 * state を redux 経由し props 変換します
 * @param {*} state 更新される state
 * @returns {*} 更新後の state を返します
 */
const mapStateToProps = (state) => {
  console.log('mapStateToProps state', state);
  return state;
};

/**
 * redux connect を {@link mapStateToProps} と {@link Ul} します
 */
const ContainerUlAsync = connect(mapStateToProps)(Ul);

/**
 * redux connect を {@link mapStateToProps} と {@link Ul} した object
 * @type {*}
 */
export default ContainerUlAsync;
