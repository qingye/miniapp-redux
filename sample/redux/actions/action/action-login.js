import actions from '../types/type-login';

export const setLoginContent = (content) => {
  return {
    type: actions.SET_LOGIN_CONTENT,
    content
  };
};