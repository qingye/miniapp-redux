import actions from '../../actions/types/type-login';

const initialState = {
  content: ''
};

export default function login(state = initialState, action) {
  switch(action.type) {
    case actions.SET_LOGIN_CONTENT:
      return {
        ...state,
        content: action.content
      };

    default:
      return state;
  }
}