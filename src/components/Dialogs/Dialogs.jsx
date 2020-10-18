import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from '../Dialogs/DialogItem/DialogItem';
import Message from '../Dialogs/Message/Message';
import { Redirect } from 'react-router-dom';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs
        .map ( d => <DialogItem name={d.name} key={d.id} id={d.id} img={d.img} />);
    let messagesElements = state.messages
        .map ( m => <Message message={m.message} key={m.id} /> );
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.message}>
                <div>{ messagesElements }</div>
                <textarea value={ newMessageBody }
                        onChange={ onNewMessageChange } 
                        placeholder="Enter your message" />
                <button onClick={ onSendMessageClick }>Send</button>
            </div>
        </div> 
    )
};

export default Dialogs;