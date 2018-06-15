import { createStore, combineReducers, compose } from 'redux';
import DontpadReducer from './../reducers/DontpadReducer';

const rootReducer = combineReducers({
  dontpadReducer: DontpadReducer
});

let composeEnhancers = compose;

// Verificar se está no modo dev
if(__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers());
};

export default configureStore;
