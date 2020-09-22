import { createStore, applyMiddleware, CombinedState } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import rootSaga from "./sagas";
import { IState } from "./reducers/movies.reducer";

export default function configureStore(
	initialState?: CombinedState<{
		moviesReducer: IState;
	}>
) {
	const sagaMiddleware = createSagaMiddleware();
	const middleware = [sagaMiddleware];
	const store = createStore(reducers, initialState, applyMiddleware(...middleware));

	sagaMiddleware.run(rootSaga);
	return store;
}
