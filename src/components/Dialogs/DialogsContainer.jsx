import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogReducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: () => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: (body) {
            dispatch(updateNewMessageBodyCreator(body))
        },
    }
}

const DialogsContainer = connect( mapStateToProps, mapDispatchToProps ) ( Dialogs );

export default DialogsContainer;