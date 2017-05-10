/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/05/08 - 19:50
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
import { Provider } from 'react-redux';

// store
import store from './store/';

// container
import ContainerButton from './container/ContainerButton';
import ContainerUl from './container/ContainerUl';

export default class CreateAppAsync {
  static make(element, buttonElement) {
    ReactDOM.render(
      <Provider store={store}>
        <ContainerUl />
      </Provider>,
      element
    );
    // button
    ReactDOM.render(
      <Provider store={store}>
        <ContainerButton />
      </Provider>,
      buttonElement
    );
  }
}
