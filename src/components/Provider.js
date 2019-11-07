import { createSubscription } from '../utils/subscription.js';

const checkIfMissing = (store) => {
  const missing = [
    'subscribe', 'dispatch', 'getState'
  ].filter(
    obj => !store.hasOwnProperty(obj)
  );

  if (missing.length > 0) {
    console.warn('This store isn\'t right...missing ' + missing.join(','));
  }
}

function Provider(store) {
  checkIfMissing(store);
  createSubscription(store);
  return function (app) {
    return Object.assign({}, { store }, app)
  }
}

export default Provider;