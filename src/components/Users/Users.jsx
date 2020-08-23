import React from 'react';
import s from './Users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {

        props.setUsers(
            [
                {
                    id: 1, photoUrl: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png',
                    followed: true, fullName: 'Alex', status: 'I am a boss', location: { city: 'Ternopil', country: 'Ukraine' }
                },
                {
                    id: 2, photoUrl: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png',
                    followed: false, fullName: 'Svetik', status: 'I am a babe boss', location: { city: 'Ternopil', country: 'Ukraine' }
                }
            ]
        )
    };

    return <div>
        {
            props.users.map(u =>
                <div key={u.id} className={s.info}>
                    <div className={s.infoLeft}>
                        <img src={u.photoUrl} className={s.image} />
                        <div>
                            {u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                        </div>
                    </div>
                    <div className={s.infoRight}>
                        <div className={s.name}>
                            <h1>{u.fullName}</h1>
                            <p>{u.status}</p>
                        </div>
                        <div className={s.name}>
                            <span>{u.location.country}</span>
                            <span>{u.location.city}</span>
                        </div>
                    </div>
                </div>)
        }
    </div>
}

export default Users;