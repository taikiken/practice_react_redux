/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/05/11 - 15:34
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

// built-in function
// Safari, IE はサポートしていないのでライブラリを使用すること
/**
 * fetch async request
 * @see https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch
 * @type {Fetch|function}
 * @private
 * @static
 */
const fetch = self.fetch;
/**
 * fetch request instance を作成します
 * @see https://developer.mozilla.org/ja/docs/Web/API/Request
 * @type {Request}
 * @private
 * @static
 */
const Request = self.Request;

/**
 * <p>fetch API を使用し Ajax request を行い `redux-thunk` friendly します</p>
 * <p>Safari, IE はサポートしていないので polyfill ライブラリを使用します<br>
 * また、 fetch は Promise も必要としています。</p>
 *
 * ```
 * $ bower install whatwg-fetch
 * $ bower install promise-polyfill
 * ```
 *
 * yarn or npm
 * ```
 * yarn install whatwg-fetch
 * yarn install promise-polyfill
 * ```
 * @see http://caniuse.com/#feat=fetch
 * @see https://github.com/github/fetch
 * @see https://github.com/taylorhakes/promise-polyfill
 * @see https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch
 * @see https://developer.mozilla.org/ja/docs/Web/API/Fetch_API
 * @see https://developer.mozilla.org/ja/docs/Web/API/Request
 * @see https://developer.mozilla.org/ja/docs/Web/API/Request/Request
 * @see https://developer.mozilla.org/ja/docs/Web/API/Headers
 * @see https://developer.mozilla.org/ja/docs/Web/API/Body
 *
 * @see http://redux.js.org/docs/advanced/AsyncActions.html
 * @see https://github.com/gaearon/redux-thunk
 */
export default class AjaxThunk {
  // ----------------------------------------
  // STATIC METHOD
  // ----------------------------------------
  /**
   * <p>fetch API へ送るオプションを作成します</p>
   *
   * 必ず設定します
   * - method: GET, POST, PUT, DELETE...etc
   * - cache: 'no-cache'
   * - credentials: 'same-origin'
   *
   * headers, formData は存在すれば option に追加されます
   *
   * @param {string} path Ajax request path
   * @param {string} [method=GET] GET, POST, PUT, DELETE...etc request method
   * @param {?Headers|?Object} [headers=null] Headers option
   * @param {?FormData} formData 送信フォームデータオプション
   * @returns {*|Request} fetch API へ送る Request instance を返します
   *
   * @see https://developers.google.com/web/updates/2015/03/introduction-to-fetch
   * @see https://developer.mozilla.org/ja/docs/Web/API/Request
   */
  static option(path, method = 'GET', headers = null, formData = null) {
    // request option
    const option = Object.create({
      method,
      cache: 'no-cache',
      // https://developers.google.com/web/updates/2015/03/introduction-to-fetch
      credentials: 'same-origin',
    });
    // headers option
    if (headers) {
      option.headers = headers;
    }
    // body へ FormData をセット
    if (formData) {
      option.body = formData;
    }
    // https://developer.mozilla.org/ja/docs/Web/API/Request
    return new Request(path, option);
  }
  // ----------------------------------------
  // CONSTRUCTOR
  // ----------------------------------------
  /**
   * request 可能フラッグを `ON` 設定します
   */
  constructor() {
    /**
     * request 可能 / 不可能 flag, true: 実行可能
     * @type {boolean}
     * @default true
     */
    this.can = true;
  }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * 実行可否 flag を true にします
   * @returns {boolean} 現在の this.can property を返します
   */
  enable() {
    this.can = true;
    return this.can;
  }
  /**
   * 実行可否 flag を false にします
   * @returns {boolean} 現在の this.can property を返します
   */
  disable() {
    this.can = false;
    return this.can;
  }
  /**
   * <p>Ajax request 開始します</p>
   * <p>request 可能 / 不可能 flag が false の時は実行しません<br>
   * true の時は false にしリクエストを開始します</p>
   * <p>START, COMPLETE, ERROR イベントを発生させます</p>
   *
   * @param {string} path Ajax request path
   * @param {string} [method=GET] GET, POST, PUT, DELETE...etc request method
   * @param {?Headers} [headers=null] Headers option, token などを埋め込むのに使用します
   * @param {?FormData} [formData=null] フォームデータを送信するのに使用します
   * @return {Promise} ajax request を開始し fetch Promise 返します
   */
  start(path, method = 'GET', headers = null, formData = null) {
    if (!this.can) {
      throw new Error(`Ajax request busy: ${this.can}`);
    }
    this.disable();
    // @type {Request} Request instance
    const request = AjaxThunk.option(path, method, headers, formData);
    return fetch(request)
      .then((response) => {
        // may be success
        this.enable();
        if (response.status !== 200) {
          throw new Error(`Ajax status error: (${response.status})`);
        }
        return response.json();
      });
  }
}
