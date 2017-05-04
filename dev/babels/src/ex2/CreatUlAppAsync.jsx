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
import { default as ListTypes } from '../ex1/ListTypes';

import { default as ContainerUl } from '../ex1/ContainerUl';
import { default as ContainerButton } from '../ex1/ContainerButton';

const storedUpdate = createStore(ListTypes.update);

export default class CreatUlAppAsync {
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
