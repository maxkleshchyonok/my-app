import React from 'react'
import Preloader from '../../Common/Preloader/preloader'
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader />
    }
    return <div className={s.bgcolor + ' ' + s.font}>
        {/* <div className={s.content}>
            <img src='https://bodyart.fitness/ru/wp-content/uploads/sites/2/2019/07/BODYART-_-FITNESS_04_Blog_Fruits.png'></img>
        </div> */}
        <div className={s.descriptionBlock + ' ' + s.font}>
            <img src={props.profile.photos.large} className={s.avaImg}/>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        </div>
    </div>
}

export default ProfileInfo;