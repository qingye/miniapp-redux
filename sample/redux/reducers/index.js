import { combineReducers } from 'redux/redux.min';
import ReducerLogin from './reducer/reducer-login';
import ReducerTest from './reducer/reducer-test';

const rootReduers = combineReducers({
  ReducerLogin,
  ReducerTest
});

export default rootReduers;