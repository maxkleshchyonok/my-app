import React from 'react';
import s from './../Friends.module.css';
import { NavLink } from 'react-router-dom';

const FriendItem = (props) => {
    let path = '/friends/' + props.id
    return (
        <div className={s.friend + ' ' + s.active + ' ' + s.fritem}>
            <NavLink to={path} >{props.ava}</NavLink>
            <NavLink to={path} >{props.name}</NavLink>
        </div>
    )
}
 
export default FriendItem;