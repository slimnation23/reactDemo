import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../redux/authReducer';
import { required } from '../../utils/validators';
import { Input } from '../common/Preloader/FormsControls/FormControls';

const LoginForm = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} validate={required} name={'email'} component={Input} />
            </div>
            <div>
                <Field placeholder={'Password'} type='password' validate={required} name={'password'} component={Input} />
            </div>
            <div>
                <Field component={Input} type={'checkbox'} validate={required} name={'rememberMe'} /> remember me 
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    let onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    return (<div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={ onSubmit } />
        </div>
    )
}

export default connect(null, (login) ) (Login);