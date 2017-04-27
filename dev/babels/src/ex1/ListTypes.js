/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/04/27 - 14:31
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

// const types = (state = [], action) => {
//   console.log('types', state, action);
//   switch (action.type) {
//     case 'ADD_LIST': {
//       return action.list;
//     }
//     default: {
//       return state;
//     }
//   }
// };
//
// export default types;


export default class ListTypes {
  static get ADD() {
    return 'ListTypesAdd';
  }
  static get CLICK() {
    return 'ListTypesClick';
  }
  static get defaultState() {
    return {
      id: 'redux-ul',
      mode: 'ex1',
      list: [],
    };
  }
  static update(state = [], action) {
    console.log('ListTypes.update', state, action);
    const clone = Object.assign({}, ListTypes.defaultState);
    switch (action.type) {
      case ListTypes.ADD: {
        console.log(`ListTypes.update ${action.type}, ${ListTypes.ADD}`);
        clone.list = action.list;
        return clone;
      }
      case ListTypes.CLICK: {
        console.log(`ListTypes.update ${action.type}, ${ListTypes.CLICK}`);
        clone.list = clone.list.concat(action.list);
        return clone;
      }
      default: {
        console.log(`ListTypes.update default ${action.type}`, clone);
        return clone;
      }
    }
  }
}
