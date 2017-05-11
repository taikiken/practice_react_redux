/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/04/25 - 19:50
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';

/**
 * li component
 * - {@link Ul}
 *   - Li
 *     - a
 */
export default class Li extends React.Component {
  /**
   * - index - PropTypes.number.isRequired
   * - link - PropTypes.string.isRequired
   * - message - PropTypes.string.isRequired
   * @returns {{index: number, link: string, message: string}} default props
   */
  static get propTypes() {
    return {
      index: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    };
  }
  /**
   * delegate - render するかを判断します, 下記 3 properties のいずれかが違っていたら render します
   * - index
   * - link
   * - message
   * @override
   * @param {?Object} nextProps 更新される props
   * @param {?Object} nextState 更新される state
   * @returns {boolean} true: will be render
   */
  shouldComponentUpdate(nextProps, nextState) {
    const { index, link, message } = this.props;
    const needUpdate =
      nextProps.index !== index ||
      nextProps.link !== link ||
      nextProps.message !== message;
    console.log(`Li.shouldComponentUpdate, ${this.props.index}`, needUpdate, nextProps, nextState);
    return needUpdate;
    // return true;
  }
  componentWillUnmount() {
    console.log(`Li.componentWillUnmount, ${this.props.index}`);
  }
  /**
   * li.list-li を作成します
   * ```
   * <li class="list-li">
   *   <a />
   * </li>
   * ```
   * @returns {XML} li.list-li を返します
   */
  render() {
    console.log(`Li.render, ${this.props.index}`);
    return (
      <li className={`list-li list-${this.props.index}`}>
        <a href={this.props.link}>{this.props.message}</a>
      </li>
    );
  }
}
