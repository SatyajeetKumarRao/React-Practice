import { action } from "../../helpers/actionCreator";
import { productConstant } from "../constant/productConstant";

export const productAction = {
  getProduct(payload) {
    return action(productConstant.GET_PRODUCT.REQUEST, payload);
  },
  getProductLoading(payload) {
    return action(productConstant.GET_PRODUCT.LOADING, payload);
  },
  getProductSuccess(payload) {
    return action(productConstant.GET_PRODUCT.SUCCESS, payload);
  },
  getProductError(payload) {
    return action(productConstant.GET_PRODUCT.ERROR, payload);
  },
};
