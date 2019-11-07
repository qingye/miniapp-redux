import connectAdvanced from '../components/connectAdvanced';
import defaultMapReducers from './mapReducers';
import defaultMapDispatchToProps from './mapDispatchToProps';
import defaultPageLifecycle from './pageLifecycle';
import defaultSelectorFactory from './selectorFactory';

/********************************************************************************
 * connect 方法，连接 Page 与 Redux
 * 解读:
 * 1. defaultMapReducers:
 *    1.1 获取当前 page 的 state 中有哪些需要绑定（关注）的 reducers;
 *    1.2 由于某个 reducer 的变化会导致整个 store.getState 变化;
 *    1.3 根据绑定的 reducers 比对，决定刷新哪些 page;
 * 2. defaultMapDispatchToProps:
 *    2.1 在当前 page 中新增一个 prpps 对象;
 *    2.2 将 dispatch(redux的action) 合并至 page.props 中;
 * 3. defaultPageLifecycle:
 *    3.1 绑定当前 page 的生命周期;
 *    3.2 在 register 时会将 state 合并到 page.data 中;
 *    3.3 监听 page 的 onLoad 和 onUnload 事件（订阅 / 取消订阅）;
 ********************************************************************************/
function createConnect({
  connectHOC = connectAdvanced,
  mapReducersFunc = defaultMapReducers,
  mapDispatchToPropsFunc = defaultMapDispatchToProps,
  pageLifecycle = defaultPageLifecycle,
  selectorFactory = defaultSelectorFactory
} = {}) {
  return function connect(mapStateToProps, mapDispatchToProps) {

    const initMapReducers = mapReducersFunc(mapStateToProps);
    const initMapDispatchToProps = mapDispatchToPropsFunc(mapDispatchToProps);

    return connectHOC(selectorFactory, {
      methodName: 'connect',
      initMapReducers,
      initMapDispatchToProps,
      pageLifecycle
    });
  }
}

export default createConnect();