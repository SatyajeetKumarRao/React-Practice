import { counterConstant } from "../constant/counterConstantRR";

export const counterAction = {
  increseCounter({ value = 1 }) {
    return {
      type: counterConstant.INCREMENT,
      payload: value,
    };
  },
  decreseCounter({ value = 1 }) {
    return {
      type: counterConstant.DECREMENT,
      payload: value,
    };
  },
};
