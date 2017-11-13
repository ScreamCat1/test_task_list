<<<<<<< HEAD
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

=======
import { createStore, applyMiddleware  } from 'redux';
>>>>>>> 58775b3e4f1318fa31ba1e7b7c5b7bab4a264d19
import rootReducer from '../reducers';
import thunk from 'redux-thunk'
/* eslint-disable no-underscore-dangle */
const configureStore = () => createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
<<<<<<< HEAD
  applyMiddleware(thunk),
=======
  applyMiddleware(thunk)
>>>>>>> 58775b3e4f1318fa31ba1e7b7c5b7bab4a264d19
);
/* eslint-enable */
export default configureStore;
