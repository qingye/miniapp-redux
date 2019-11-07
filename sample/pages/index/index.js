//index.js
import { bindActionCreators } from 'redux/redux.min';
import { connect } from 'miniapp-redux/miniapp-redux.min';
import * as LoginActions from '../../redux/actions/action/action-login';

Page(connect(
  // mapStateToProps
  (state) => ({
    login: state.ReducerLogin
  }),

  // mapDispatchToProps
  (dispatch) => ({
    loginAction: bindActionCreators(LoginActions, dispatch)
  })

)({
  data: {
    person: "chris"
  },

  onLoad: function (options) {
  },

  //事件处理函数
  tapClick: function () {
    setTimeout(() => {
      this.props.loginAction.setLoginContent("Index页面修改的数据");
    }, 3000);

    wx.navigateTo({
      url: '../logs/logs'
    });
  }
}))