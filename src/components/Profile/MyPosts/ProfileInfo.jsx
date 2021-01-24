import React, { useState } from 'react'
import Preloader from '../../../components/common/Preloader/Preloader'
import ProfileStatusWithHooks from './Post/ProfileStatusWithHooks'
import s from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/user.png'

const ProfileInfo = ({ profile, updateStatus, status, isOwner, savePhoto }) => {
    let [editMode, setEditMode] = useState(false)

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
            <img
                className={s.mainPhoto}
                src={profile.photos.small || userPhoto}
            />
            {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
            <ProfileStatusWithHooks
                status={status}
                updateStatus={updateStatus}
            />
            {editMode ? (
                <ProfileDataForm profile={profile} />
            ) : (
                <ProfileData
                    goToEditMode={() => {
                        setEditMode(true)
                    }}
                    profile={profile}
                    isOwner={isOwner}
                />
            )}
        </div>
    )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return (
        <div>
            {isOwner && (
                <div>
                    <button onClick={goToEditMode}>Edit</button>
                </div>
            )}
            <p>Full Name: {profile.fullName}</p>
            <p>Про себе: {profile.aboutMe}</p>
            <p>
                Contacts:{' '}
                {Object.keys(profile.contacts).map((key) => {
                    return (
                        <Contact
                            contactTitle={key}
                            contactValue={profile.contacts[key]}
                        />
                    )
                })}
            </p>
            <p>
                Looking for a job:{' '}
                {profile.lookingForAJobDescription ? 'yes' : 'no'}
            </p>
        </div>
    )
}

const ProfileDataForm = ({ profile }) => {
    return <div>Form</div>
}

const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}

export default ProfileInfo
