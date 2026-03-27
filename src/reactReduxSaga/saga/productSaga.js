import { takeLatest, all, put, call } from "redux-saga/effects";
import { productConstant } from "../constant/productConstant";
import { productAction } from "../action/productAction";
import { getProductService } from "../service/productService";

function* _getProduct(action) {
  console.log(action);
  try {
    const { payload } = action;
    yield put(productAction.getProductLoading(true));
    yield put(productAction.getProductError(null));
    const data = yield call(getProductService, payload);
    yield put(productAction.getProductSuccess(data));
  } catch (error) {
    yield put(productAction.getProductError(error.message));
  } finally {
    yield put(productAction.getProductLoading(false));
  }
}

function* getProduct() {
  yield takeLatest(productConstant.GET_PRODUCT.REQUEST, _getProduct);
}

export function* productSaga() {
  yield all([getProduct()]);
}
