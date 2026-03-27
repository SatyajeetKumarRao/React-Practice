import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../../reactReduxSaga/action/productAction";

const ReactReduxSagaExample = () => {
    const {
        loading: getProductLoading,
        data: productData,
        error: getProductError,
    } = useSelector((state) => state.ProductReducer);

    const dispatch = useDispatch();
    const getProduct = useCallback(
        (payload) => dispatch(productAction.getProduct(payload)),
        [dispatch],
    );
    function handleGetProduct() {
        getProduct();
    }
    return (
        <div>
            <h2>React Redux Saga Example</h2>
            <button type="button" onClick={handleGetProduct}>
                Get Products
            </button>
            {getProductError ? <p>{getProductError}</p> : null}
            {getProductLoading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {productData?.products.map((product) => (
                        <p key={product.id}>{product.title}</p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ReactReduxSagaExample;
