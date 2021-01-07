import React from 'react'
import Paginators from '../common/Paginators/Paginators'
import User from './User'

let Users = ({
    currentPage,
    totalUsersCount,
    pageSize,
    onPageChanged,
    users,
    ...props
}) => {
    return (
        <div>
            <Paginators
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
            />
            {users.map(u =>
                <User
                    user={u}
                    followingInProgress={props.followingInProgress}
                    unfollow={props.unfollow}
                    follow={props.follow}
                    key={u.id}
                />
            )}
        </div>
    )
}

export default Users
