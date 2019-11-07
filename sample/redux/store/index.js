import { createStore } from 'redux/redux.min';
import reducers from '../reducers/index';

const store = createStore(reducers);

export default store;