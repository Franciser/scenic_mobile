import { createStore ,applyMiddleware} from 'redux'
import rootReducer from '../reducers/combine'
import thunk from 'redux-thunk';
let store = createStore(
    rootReducer,
    // applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
);

export default store