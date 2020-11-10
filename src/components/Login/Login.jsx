import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators';
import { Input } from '../common/Preloader/FormsControls/FormControls';

const LoginForm = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} validate={required} name={'login'} component={Input} />
            </div>
            <div>
                <Field placeholder={'Password'} validate={required} name={'password'} component={Input} />
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
        console.log(formData)
    }
    return (<div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={ onSubmit } />
        </div>
    )
}

export default Login;