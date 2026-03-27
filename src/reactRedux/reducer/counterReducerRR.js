import { counterConstant } from "../constant/counterConstantRR";

const initialState = { count: 0 };
export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case counterConstant.INCREMENT:
      return { ...state, count: state.count + action.payload };

    case counterConstant.DECREMENT:
      return { ...state, count: state.count - action.payload };

    default:
      return state;
  }
}
