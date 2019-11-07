/********************************************************************************
 * 对于某个page 解析有哪些 reducer 需要（便于之后对比，刷新，渲染）
 ********************************************************************************/
const mapReducers = (mapStateToProps) => {
  let reducers = {};
  let str = Function.prototype.toString.call(mapStateToProps).replace(/[\s|\;]*/g, '');
  str = str.substring(str.indexOf('return') + 7, str.length - 2);
  str.split(',').forEach(item => {
    let kv = item.split(':');
    reducers[kv[1].split('.')[1]] = kv[0];
  });
  return reducers;
}

export default mapReducers;