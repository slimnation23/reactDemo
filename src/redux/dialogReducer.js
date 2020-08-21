const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-POST-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
    
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
        default: 
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
});

export default dialogsReducer;