import {createStore, combineReducers} from 'redux';
import profileReduser from './profileReducer';
import dialogsReducer from './dialogReducer';
import sidebarReducer from './sidebarReducer';

let reducers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
}); 

let store = createStore(reducers);

export default store;