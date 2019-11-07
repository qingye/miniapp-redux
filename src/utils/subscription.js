let unsubscribe = null;
const listeners = [];

/********************************************************************************
 * 基于 store 创建全局监听 store 变化的方法
 ********************************************************************************/
const createSubscription = (store) => {
  if (unsubscribe) {
    return;
  }

  const update = () => {
    listeners.filter(
      listener => listener.active
    ).forEach(
      listener => listener(store.getState())
    );
  }
  unsubscribe = store.subscribe(update);
}

/********************************************************************************
 * 订阅
 ********************************************************************************/
const subscription = (listener) => {
  return listeners.push(listener) - 1;
}

/********************************************************************************
 * 取消订阅
 ********************************************************************************/
const unsubscription = (index) => {
  listeners.splice(index, 1);
}

export {
  createSubscription,
  subscription,
  unsubscription
}