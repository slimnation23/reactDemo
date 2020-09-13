import {createStore, combineReducers} from 'redux';
import profileReduser from './profileReducer';
import dialogsReducer from './dialogReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';

let reducers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer 
}); 

let store = createStore(reducers);

export default store;