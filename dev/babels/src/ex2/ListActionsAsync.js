/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/04/28 - 18:41
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

// net
import { default as NetRequest } from './NetRequest';

// reducer
import { default as ListReducersAsync } from './ListReducersAsync';

export default class ListActionsAsync {
  static done(data) {
    console.log('ListActionsAsync.done', data);
    return {
      type: ListReducersAsync.COMPLETE,
      data,
    };
  }
  static fail(error) {
    console.log('ListActionsAsync.fail', error);
    return {
      type: ListReducersAsync.ERROR,
      error,
    };
  }
  // constructor(resolve, reject, path = '/api/json/test.json') {
  //   this.request = new NetRequest(path, resolve, reject);
  // }
  constructor(path = '/api/json/test.json') {
    this.request = new NetRequest(path, this.done.bind(this), this.fail.bind(this));
    this.dispatch = null;
  }
  click(dispatch) {
    this.dispatch = dispatch;
    this.request.start();
    return {
      type: ListReducersAsync.CLICK,
    };
  }
  done(data) {
    this.dispatch(ListActionsAsync.done(data));
  }
  fail(error) {
    this.dispatch(ListActionsAsync.fail(error));
  }
}
