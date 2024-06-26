import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducer/index';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';

let store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;