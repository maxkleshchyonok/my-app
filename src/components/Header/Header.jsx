import React from 'react'
import s from './Header.module.css'
import {NavLink} from 'react-router-dom'

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://static9.depositphotos.com/1642482/1149/i/600/depositphotos_11491656-stock-photo-strawberry.jpg'></img>
        <div className={s.loginBlock}>
            {props.isAuth? 
            <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
            : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;
