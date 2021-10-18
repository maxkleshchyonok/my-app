import React from "react";
import styles from './Users.module.css'
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

let Users = ({ currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props }) => {

    return <div className={styles.content}>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
            totalItemsCount={totalUsersCount} pageSize={pageSize} />
        {users.map(u => <User followingInProgress={props.followingInProgress}
            user={u} key={u.id}
            unfollow={props.unfollow}
            follow={props.follow}
        />
        )
        }
    </div>

}

export default Users