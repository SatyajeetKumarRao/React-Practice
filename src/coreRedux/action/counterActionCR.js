import { counterConstant } from "../constant/counterConstantCR";

const increaseCounter = () => {
  return {
    type: counterConstant.INCREMENT,
  };
};

const decrementCounter = () => {
  return {
    type: counterConstant.DECREMENT,
  };
};

export { increaseCounter, decrementCounter };
