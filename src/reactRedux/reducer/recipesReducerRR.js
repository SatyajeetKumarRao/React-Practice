import { recipesConstant } from "../constant/recipesConstantRR";

export function recipesReducer(state = {}, action) {
  switch (action.type) {
    case recipesConstant.GET_RECIPES.LOADING:
      return { ...state, loading: action.payload };

    case recipesConstant.GET_RECIPES.SUCCESS:
      return { ...state, data: action.payload, loading: false, error: false };

    case recipesConstant.GET_RECIPES.ERROR:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
}
