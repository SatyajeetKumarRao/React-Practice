import { counterConstant } from "../constant/counterConstantCR";

const initialState = {
  count: 0,
};
export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case counterConstant.INCREMENT:
      return { ...state, count: state.count + 1 };

    case counterConstant.DECREMENT:
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
}
