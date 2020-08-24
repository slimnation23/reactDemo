import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';


class Users extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return <div>
        {
            this.props.users.map(u =>
                <div key={u.id} className={s.info}>
                    <div className={s.infoLeft}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.image} />
                        <div>
                            {u.followed
                                ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
                        </div>
                    </div>
                    <div className={s.infoRight}>
                        <div className={s.name}>
                            <h1>{u.name}</h1>
                            <p>{u.status}</p>
                        </div>
                        <div className={s.name}>
                            <span>{'u.location.country'}</span>
                            <span>{'u.location.city'}</span>
                        </div>
                    </div>
                </div>)
        }
    </div>
    }
}

export default Users;