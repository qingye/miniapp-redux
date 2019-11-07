//logs.js
import { connect } from 'miniapp-redux/miniapp-redux.min';

Page(connect(
  // mapStateToProps
  (state) => ({
    login: state.ReducerLogin,
    test: state.ReducerTest
  })

)({
  data: {
  },
  onLoad: function () {
  }
}))
