import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return <header>
        <img src="https://img.icons8.com/doodle/48/000000/kick-scooter.png" />
        <div className={s.loginBlock}>
            { props.isAuth ? props.login 
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
}

export default Header;