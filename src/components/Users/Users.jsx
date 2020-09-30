import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

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
                                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} 
                                    onClick={() => {props.unfollow(u.id)}
                                    }>Unfollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                     onClick={() => {props.follow(u.id)}
                                    }>Follow</button>}
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