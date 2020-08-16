import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        { store => {
                // let state = store.getState().dialogsPage;

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator())
                };

                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body))
                };

                return <Dialogs updateNewMessageBody={onNewMessageChange}
                        sendMessage={onSendMessageClick}
                        dialogsPage={store.getState().dialogsPage} />
            }
        }
    </StoreContext.Consumer>
};

export default DialogsContainer;