import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
import reducer from './reducer';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const store = createStore(reducer, composeEnhancer(
    applyMiddleware(sagaMiddleware)
));
sagaMiddleware.run(rootSaga);
export default store;
