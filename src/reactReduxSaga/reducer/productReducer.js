import { productConstant } from "../constant/productConstant";

export function productReducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case productConstant.GET_PRODUCT.LOADING:
      return { ...state, loading: payload };

    case productConstant.GET_PRODUCT.SUCCESS:
      return { ...state, data: payload };

    case productConstant.GET_PRODUCT.ERROR:
      return { ...state, error: payload };

    default:
      return state;
  }
}
