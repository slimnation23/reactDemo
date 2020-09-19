import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <ul>
                {pages.map(p => {
                    return <li className={props.currentPage === p && s.selectedPage}
                        onClick={(e) => { props.onPageChanged(p); }}>{p}</li>
                })}
            </ul>
            {
                props.users.map(u =>
                    <div key={u.id} className={s.info}>
                        <div className={s.infoLeft}>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.image} />
                            </NavLink>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': 'd1218da9-5087-45c6-a2c4-fc2a0ce78d08'
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode == 0) {
                                                    props.unfollow(u.id)
                                                }
                                            });
                                    }

                                    }>Unfollow</button>
                                    : <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': 'd1218da9-5087-45c6-a2c4-fc2a0ce78d08'
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.follow(u.id)
                                            }
                                        });
                                    }}>Follow</button>}
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
    )
}

export default Users;