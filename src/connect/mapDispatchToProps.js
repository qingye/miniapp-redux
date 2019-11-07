import { isFn } from '../utils/utils.js';

/********************************************************************************
 * 合并 dispatch 到 props 对象中，保持与 React 中 Redux 写法一致
 * Usage: this.props.xxxAction.xxx
 ********************************************************************************/
const mapDispatchToProps = (mapDispatchToProps) => {
  return isFn(mapDispatchToProps) ? dispatch => mapDispatchToProps(dispatch) : undefined;
}

export default mapDispatchToProps;