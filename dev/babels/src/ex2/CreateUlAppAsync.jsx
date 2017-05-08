/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/04/28 - 18:35
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

// react
import { default as React } from 'react';
import { default as ReactDOM } from 'react-dom';

// redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// types
import { default as ListReducersAsync } from './ListReducersAsync';

import { default as ContainerUlAsync } from './ContainerUlAsync';
import { default as ContainerButtonAsync } from './ContainerButtonAsync';

/**
 * ListReducersAsync instance
 * @type {ListReducersAsync}
 */
const reducer = new ListReducersAsync();
/**
 * redux createStore で {@link ListReducersAsync.update} します
 * @type {Store<S>}
 */
const storedUpdate = createStore(reducer.update);

/**
 * {@link ContainerUlAsync}, {@link ContainerButtonAsync}.ContainerButton を出力します
 * - Provider
 *  - ContainerUlAsync
 * - Provider
 *  - ContainerButtonAsync.ContainerButton
 */
export default class CreateUlAppAsync {
  /**
   * {@link ContainerUlAsync}, {@link ContainerButtonAsync}.ContainerButton を作成します
   * @param {Element} element {@link Ul} parent node
   * @param {Element} buttonElement {@link Button} parent node
   */
  static make(element, buttonElement) {
    ReactDOM.render(
      <Provider store={storedUpdate}>
        <ContainerUlAsync />
      </Provider>,
      element
    );
    // button
    ReactDOM.render(
      <Provider store={storedUpdate}>
        <ContainerButtonAsync.ContainerButton />
      </Provider>,
      buttonElement
    );
  }
}
