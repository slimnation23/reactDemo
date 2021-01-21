import React from 'react'
import Preloader from '../../../components/common/Preloader/Preloader'
import ProfileStatusWithHooks from './Post/ProfileStatusWithHooks'
import s from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/user.png'

const ProfileInfo = ({ profile, updateStatus, status, isOwner, savePhoto }) => {
    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <img className={s.mainPhoto} src={profile.photos.small || userPhoto} />
                { isOwner && <input type='file' onChange={onMainPhotoSelected} />}
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
