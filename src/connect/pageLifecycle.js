import { isFn, clone, mapClone, compare, callAfter } from '../utils/utils.js';
import { subscription, unsubscription } from '../utils/subscription.js';

/********************************************************************************
 * 订阅 state 的变化
 ********************************************************************************/
const register = (context, store) => {
  const reducers = context.reducers;
  const reducerKeys = Object.keys(reducers);
  let listener = function (state) {
    let preState = listener.preState;
    let curState = clone(state, reducerKeys);
    if (!preState || !compare(preState, curState)) {
      context.setData({
        ...context.data,
        ...mapClone(curState, reducers)
      });
      listener.preState = curState;
    }
  }

  listener.index = subscription(listener);
  listener.active = true;
  listener.pageName = context.__route__;
  context['listener'] = listener;

  /******************************************************************************
   * Sync the current store's state, for next state compare
   ******************************************************************************/
  listener(store.getState());
}

const unregister = (context) => {
  unsubscription(context.listener.index);
  delete context.listener;
}

/********************************************************************************
 * Page.onLoad   开始订阅
 * Page.onUnload 解除订阅
 ********************************************************************************/
const handlePageLifecycle = (store, page) => {
  const { onLoad, onUnload } = page;

  page.onLoad = function (options) {
    register(this, store);
    return callAfter(this, onLoad, arguments);
  }

  page.onUnload = function () {
    unregister(this);
    return callAfter(this, onUnload, arguments);
  }
}

export default handlePageLifecycle;