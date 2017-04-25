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

export default class Li extends React.Component {
  static get propTypes() {
    return {
      index: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    };
  }
  componentWillUnmount() {
    console.log(`Li.componentWillUnmount, ${this.props.index}`);
  }
  render() {
    return (
      <li className={`list-${this.props.index}`}>
        <a href={this.props.link}>{this.props.message}</a>
      </li>
    );
  }
}
