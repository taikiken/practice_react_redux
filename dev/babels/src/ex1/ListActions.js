/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/04/27 - 15:28
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

import { default as ListTypes } from './ListTypes';

const { id, mode } = ListTypes.defaultState;

const makeList = index => ({
  id: `id-${index}`,
  link: `/a/${index}`,
  message: `index is ${index}`,
});

export default class ListActions {
  static update(list = []) {
    console.log('ListActions.update', list);
    return {
      type: ListTypes.ADD,
      list,
      id,
      mode,
    };
  }
  static click() {
    console.log('ListActions.click');
    return {
      type: ListTypes.CLICK,
      list: [makeList(Date.now())],
      id,
      mode,
    };
  }
}
