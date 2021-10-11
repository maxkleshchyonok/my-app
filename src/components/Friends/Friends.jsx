import React from 'react';
import s from './Friends.module.css';
import FriendItem from './FriendItem/FriendItem';

const Friends = (props) => {

    let friendsElements = props.state.friends.map(f => <FriendItem ava={f.ava} id={f.id} name={f.name}/>)

    return (
        <div className={s.friends}>
                <div className={s.friendsItems}>
                    {friendsElements}
                </div>
        </div>
    )
}

export default Friends;