import actions from '../../actions/types/type-test';

const initialState = [
  "initState"
];

export default function test(state = initialState, action) {
  switch (action.type) {
    case actions.SET_TEST:
      return [
        ...state,
        action.content
      ];

    default:
      return state;
  }
}