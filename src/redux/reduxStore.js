import {createStore, combineReducers} from 'redux';
import profileReduser from './profileReducer';
import dialogsReducer from './dialogReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
}); 

let store = createStore(reducers);

export default store;