import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/reducer';


const middlewares = [thunk];

export default function configureStore (initialState = {}) {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middlewares)
  );
  return store
}
