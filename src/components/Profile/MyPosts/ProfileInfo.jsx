import React from 'react'
import Preloader from '../../../components/common/Preloader/Preloader'
import ProfileStatus from './Post/ProfileStatus'
import ProfileStatusWithHooks from './Post/ProfileStatusWithHooks'
import s from './ProfileInfo.module.css'

const ProfileInfo = ({ profile, updateStatus, status }) => {
    if (!profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <img src={profile.photos.small} />
                <ProfileStatusWithHooks
                    status={status}
                    updateStatus={updateStatus}
                />
                <div>
                    <p>Про себе: {profile.aboutMe}</p>
                    <p>Contacts: {profile.contacts.facebook}</p>
                    <p>
                        Looking for a job: {profile.lookingForAJobDescription}
                    </p>
                    <p>Full Name: {profile.fullName}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
