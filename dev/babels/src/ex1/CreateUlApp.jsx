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
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// types
import { default as ListTypes } from './ListTypes';

import { default as ContainerUl } from './ContainerUl';
import { default as ContainerButton } from './ContainerButton';

const storedUpdate = createStore(ListTypes.update);
console.log('storedUpdate', storedUpdate);

export default class CreateUlApp {
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
