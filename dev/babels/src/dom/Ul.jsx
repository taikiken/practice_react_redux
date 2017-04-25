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

export default class Ul extends React.Component {
  static get propTypes() {
    return {
      id: PropTypes.string.isRequired,
      mode: PropTypes.string.isRequired,
      list: PropTypes.arrayOf(PropTypes.objectOf({
        id: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
      })).isRequired,
      // list: PropTypes.array.isRequired,
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      list: props.list,
    };
  }
  render() {
    console.log('Ul.render', this.state.list);
    return (
      <ul id={`test-code-${this.props.id}`} className={`mode-${this.props.mode}`}>
        {
          this.state.list.map((data, index) => {
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
