/**
 * @license inazumatv.com
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/05/05
 *
 * Copyright (c) 2011-2015 inazumatv.com, inc.
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 */

// redux
import { connect } from 'react-redux';

// ------
import { default as Ul } from '../components/Ul';

const mapStateToProps = (state) => {
  console.log('mapStateToProps state', state);
  // return {
  //   id: state.id,list,
  //   mode: state.mode,
  //   list: state.data,
  // };
  return state;
};

const ContainerUlAsync = connect(mapStateToProps)(Ul);

export default ContainerUlAsync;
