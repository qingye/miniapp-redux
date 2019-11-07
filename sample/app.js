//app.js
import { Provider } from 'miniapp-redux/miniapp-redux.min';
import store from './redux/store/index';

App(Provider(store)({
  onLaunch: function () {
  },

  globalData: {
  }
}))