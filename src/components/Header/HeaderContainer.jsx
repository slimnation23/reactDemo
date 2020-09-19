import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/authReducer'

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
        .then(response => {
            if (response.data.resultCode === 0) {
                alert('Hello!!!');
                let {id, login, email} = response.data.data;
                this.props.setAuthUserData(id, email, login);
            } else {
                alert('Зайди на сайт Social Network API')
            }
        });
    }
    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.siAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, { setAuthUserData }) (HeaderContainer);