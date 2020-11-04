import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from '../Dialogs/DialogItem/DialogItem';
import Message from '../Dialogs/Message/Message';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

const AddMessageForm = (props) => {
    return (
        <form onSubmit={ props.handleSubmit }>
            <div>
                <Field component={ 'textarea' } name={ 'newMessageBody' } placeholder={ 'Enter youe message' } />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs
        .map ( d => <DialogItem name={d.name} key={d.id} id={d.id} img={d.img} />);
    let messagesElements = state.messages
        .map ( m => <Message message={m.message} key={m.id} /> );
        
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if(!props.isAuth) return <Redirect to={'/login'} />;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.message}>
                <div>{ messagesElements }</div>
                <AddMessageReduxForm onSubmit={addNewMessage} />
                {/* <textarea value={ newMessageBody }
                        onChange={ onNewMessageChange } 
                        placeholder="Enter your message" />
                <button onClick={ onSendMessageClick }>Send</button> */}
            </div>
        </div> 
    )
};

export default Dialogs;