import React from 'react';
import Preloader from '../../../components/common/Preloader/Preloader';
import ProfileStatus from './Post/ProfileStatus';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                {/* <img className={s.img} src="https://images.pexels.com/photos/3672776/pexels-photo-3672776.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /> */}
                <h3>My posts</h3>
            </div>
            <div>
                <img src={props.profile.photos.small} />
                <ProfileStatus status={props.status} />
                <div>
                    <p>Про себе: {props.profile.aboutMe}</p>
                    <p>Contacts: {props.profile.contacts.facebook}</p>
                    <p>Looking for a job: {props.profile.lookingForAJobDescription}</p>
                    <p>Full Name: {props.profile.fullName}</p>   
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;