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

import { React } from 'react';

export default class Ul extends React.Component {
  static get propTypes() {
    return {
      id: React.propTypes.number.isRequired,
      mode: React.propTypes.string.isRequired,
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      mode: props.mode,
    };
  }
  render() {
    return (
      <ul id={`test-code-${this.props.id}`}>
        <li>{this.state.mode}</li>
      </ul>
    );
  }
}
