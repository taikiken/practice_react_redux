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
import { default as PropTypes } from 'prop-types';

/**
 * input type: button を作成します
 */
export default class Button extends React.Component {
  /**
   * - maker - PropTypes.func.isRequired
   * @returns {{maker: Function}} default props
   */
  static get propTypes() {
    return {
      maker: PropTypes.func.isRequired,
      loading: PropTypes.string,
    };
  }
  /**
   * default props.loading - empty
   * @returns {{loading: string}} react default props.loading を設定します
   */
  static get defaultProps() {
    return {
      loading: '',
    };
  }
  /**
   * onClick を bind します
   * @param {Object} props {maker}
   */
  constructor(props) {
    super(props);
    console.log('Button.constructor', props);
    /**
     * bound this.onClick
     * @type {function}
     */
    this.onClick = this.onClick.bind(this);
  }
  /**
   * delegate - render するかを判断します, props.loading が違っていたら render します
   * @override
   * @param {?Object} nextProps 更新される props
   * @param {?Object} nextState 更新される state
   * @returns {boolean} true: will be render
   */
  shouldComponentUpdate(nextProps, nextState) {
    const { loading } = this.props;
    const needUpdate = nextProps.loading !== loading;
    console.log('Button.shouldComponentUpdate', needUpdate, loading, nextProps, nextState);
    return needUpdate;
  }
  // componentWillUnmount() {
  //   console.log('Button.componentWillUnmount');
  // }
  /**
   * input.onclick event handler
   * @param {Event} event input.onclick Event object
   */
  onClick(event) {
    event.preventDefault();
    console.log('Button.onClick', event);
    this.props.maker();
  }
  /**
   * input
   * @returns {XML} input type: button
   */
  render() {
    console.log('Button.render style', this.props.loading);
    return (
      <div className={`input-container ${this.props.loading}`}>
        <input
          type="button"
          onClick={this.onClick}
          value="CLICK ME!"
        />
      </div>
    );
  }
}
