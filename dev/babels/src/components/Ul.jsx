/**
 * @license inazumatv.com
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/04/23
 *
 * Copyright (c) 2011-2015 inazumatv.com, inc.
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 */

import { default as React } from 'react';

// @see https://facebook.github.io/react/blog/2017/04/07/react-v15.5.0.html
import { default as PropTypes } from 'prop-types';

import { default as Li } from './Li';

/**
 * ul component
 * - Ul
 *   - {@link Li}
 */
export default class Ul extends React.Component {
  /**
   * - id - PropTypes.string.isRequired
   * - mode - PropTypes.string.isRequired
   * - list - PropTypes.arrayOf(PropTypes.shape({
   *      id: PropTypes.string.isRequired,
   *      link: PropTypes.string.isRequired,
   *      message: PropTypes.string.isRequired,
   *    })).isRequired
   * @returns {{id: string, mode: string, list: Object, loading: string}} default props
   */
  static get propTypes() {
    return {
      id: PropTypes.string.isRequired,
      mode: PropTypes.string.isRequired,
      list: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        link: PropTypes.string,
        message: PropTypes.string,
      })).isRequired,
      loading: PropTypes.string,
    };
  }
  /**
   * default props.loading - empty
   * @returns {{loading: string}} default props.loading
   */
  static get defaultProps() {
    return {
      loading: '',
    };
  }
  // /**
  //  * display name set to 'Ul'
  //  * @param {Object} props {id, mode, list}
  //  */
  // constructor(props) {
  //   super(props);
  //   console.log('Ul.constructor props', props);
  //   if (!props.list) {
  //     throw new Error(`Ul.props.list not found ${props.list}`);
  //   }
  //   // react/prefer-stateless-function
  //   // @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
  //   this.displayName = 'Ul';
  // }
  /**
   * ul.mode-${this.props.mode} を作成します返します,
   * props.list length 0 は `null` を返します
   * @returns {?XML} ul component を作成します
   */
  render() {
    const { list } = this.props;
    console.log('Ul.render', list, list.length, this.props, this.state);
    // データがないときは `null` を返します
    if (list.length === 0) {
      return <span className="empty-sapn">&nbsp;</span>;
    }
    return (
      <ul id={`test-code-${this.props.id}`} className={`mode-${this.props.mode} ${this.props.loading}`}>
        {
          list.map((data, index) => {
            const key = `component-li-${data.id}`;
            return (
              <Li
                key={key}
                index={index}
                link={data.link}
                message={data.message}
              />
            );
          })
        }
      </ul>
    );
  }
}
