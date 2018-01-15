import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import createReducer from './modules/index';

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const configureStore = initialState => {
  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );

  store.injectReducers = asyncReducers =>
    store.replaceReducer(createReducer(asyncReducers));

  if (module.hot) {
    module.hot.accept('./modules', () =>
      store.replaceReducer(require('./modules').default));
  }

  return store;
};

export default configureStore;
