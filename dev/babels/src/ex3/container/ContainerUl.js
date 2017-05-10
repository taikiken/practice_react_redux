/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/05/10 - 18:46
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

// redux
import { connect } from 'react-redux';

// ------
import { default as Ul } from '../../components/Ul';

/**
 * state を redux 経由し props 変換します
 * @param {*} request 更新される state {button, request}
 * @returns {*} 引数 state を返します
 */
const mapStateToProps = ({ request }) => {
  console.log('UL mapStateToProps state', request);
  return request;
};

/**
 * redux connect を {@link mapStateToProps} と {@link Ul} します
 */
const ContainerUl = connect(mapStateToProps)(Ul);

/**
 * redux connect を {@link mapStateToProps} と {@link Ul} した object
 * @type {*}
 */
export default ContainerUl;
