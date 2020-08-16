import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogReducer";
import sidebarReducer from "./sidebarReducer";
let store = {
    _state: {
        dialogPage: {
            messages: [
                { id: 1, message: 'Hello' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'I am fine' },
                { id: 4, message: 'Thanks' },
            ],

            dialogs: [
                { id: 1, name: 'Karolina', img: 'https://images.pexels.com/photos/1214259/pexels-photo-1214259.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
                { id: 2, name: 'Sasha', img: 'https://images.pexels.com/photos/15239/flower-roses-red-roses-bloom.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
                { id: 3, name: 'Sveta', img: 'https://images.pexels.com/photos/863963/pexels-photo-863963.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
                { id: 4, name: 'Larisa', img: 'https://images.pexels.com/photos/1656579/pexels-photo-1656579.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
                { id: 5, name: 'Yana', img: 'https://images.pexels.com/photos/1212693/pexels-photo-1212693.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
                { id: 6, name: 'Sasha', img: 'https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }
            ],
            newMessageBody: '',
        },
        profilePage: {
            posts: [
                { id: 1, message: 'Hi! How are you?', likesCount: 12 },
                { id: 2, message: 'What are you doing?', likesCount: 25 }
            ],
            newPostText: '123'
        },    
        sidebar: {},
    },
    _callSubscriber() {
        console.log('State was changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },

}

export default store;
window.store = store;