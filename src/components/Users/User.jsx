import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom'

let User = ({ user, followingInProgress, unfollow, follow }) => {
    let u = user
    return (
        <div className={s.info}>
            <div className={s.infoLeft}>
                <NavLink to={'/profile/' + u.id}>
                    <img
                        src={
                            u.photos.small != null ? u.photos.small : userPhoto
                        }
                        className={s.image}
                    />
                </NavLink>
                <div>
                    {u.followed ? (
                        <button
                            disabled={followingInProgress.some(
                                (id) => id === u.id
                            )}
                            onClick={() => {
                                unfollow(u.id)
                            }}
                        >
                            Unfollow
                        </button>
                    ) : (
                        <button
                            disabled={followingInProgress.some(
                                (id) => id === u.id
                            )}
                            onClick={() => {
                                follow(u.id)
                            }}
                        >
                            Follow
                        </button>
                    )}
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
        </div>
    )
}

export default User
