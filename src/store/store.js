import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { rootReactReduxSagaReducer } from "../reactReduxSaga/reducer";
import { rootReactReduxReducer } from "../reactRedux/reducer";
import { rootCoreReduxReducer } from "../coreRedux/reducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../reactReduxSaga/saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  ...rootCoreReduxReducer,
  ...rootReactReduxReducer,
  ...rootReactReduxSagaReducer,
});

export const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, thunk)),
);

sagaMiddleware.run(rootSaga);
