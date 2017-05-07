/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/04/27 - 14:47
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
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// redux-thunk
import thunk from 'redux-thunk';

// types
import { default as ListTypes } from './ListTypes';

import { default as ContainerUl } from './ContainerUl';
import { default as ContainerButton } from './ContainerButton';

const storedUpdate = createStore(
  ListTypes.update,
  applyMiddleware(thunk)
);
// console.log('storedUpdate', storedUpdate);

/**
 * {@link ContainerUl}, {@link ContainerButton} を作成します
 * {@link ListTypes.update} を redux.createStore します
 * ```
 * const storedUpdate = createStore(ListTypes.update);
 * ```
 * ** ReactDOM.render **
 * - Provider store={storedUpdate}
 *   - {@link ContainerUl}
 *     - redux.connect()({@link Ul})
 *   - {@link ContainerButton}
 *    - redux.connect()({@link ContainerButton}.containerButtonDispatch)
 *      - {@link Button}
 *
 */
export default class CreateUlApp {
  /**
   * parent element を受取 {@link ContainerUl}, {@link ContainerButton} を作成します
   * @param {Element} element div#js-container
   * @param {Element} buttonElement div#js-button-container
   */
  static make(element, buttonElement) {
    ReactDOM.render(
      <Provider store={storedUpdate}>
        <ContainerUl />
      </Provider>,
      element
    );
    // button
    ReactDOM.render(
      <Provider store={storedUpdate}>
        <ContainerButton />
      </Provider>,
      buttonElement
    );
  }
}
