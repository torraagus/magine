import { createStore, applyMiddleware, CombinedState } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import rootSaga from "./sagas";
import { IState } from "./reducers/movie.reducer";

export default function configureStore(
	initialState?: CombinedState<{
		movieReducer: IState;
	}>
) {
	const sagaMiddleware = createSagaMiddleware();
	const middleware = [sagaMiddleware];
	const store = createStore(reducers, initialState, applyMiddleware(...middleware));

	sagaMiddleware.run(rootSaga);
	return store;
}
