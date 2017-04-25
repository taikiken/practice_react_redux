/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/04/25 - 21:32
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

import { default as React } from 'react';
// import { default as PropTypes } from 'prop-types';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(event) {
    event.preventDefault();
    console.log('Button.onClick', event, this);
  }
  render() {
    return (
      <input
        type="button"
        onClick={this.onClick}
        value="CLICK ME!"
      />
    );
  }
}
