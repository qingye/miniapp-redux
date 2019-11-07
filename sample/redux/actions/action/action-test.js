import actions from '../types/type-test';

export const setTest = (content) => {
  return {
    type: actions.SET_TEST,
    content
  };
};