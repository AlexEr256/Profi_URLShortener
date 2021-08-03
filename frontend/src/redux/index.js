import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import formReducer from './reducers/formReducer';

const rootReducer = combineReducers({
    formReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;