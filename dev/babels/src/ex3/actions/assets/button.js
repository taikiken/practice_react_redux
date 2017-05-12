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

import ReducerTypes from '../../reducers/ReducerTypes';

/**
 * {@link Button} click で発動される **action** を定義します
 * @type {function}
 * @returns {*} type: {@link ReducerTypes.BUTTON_CLICK} を返します
 */
const buttonAction = () => ({ type: ReducerTypes.BUTTON_CLICK });

/**
 * {@link Button} click で発動される **action** を定義します
 * @type {function}
 */
export default buttonAction;
