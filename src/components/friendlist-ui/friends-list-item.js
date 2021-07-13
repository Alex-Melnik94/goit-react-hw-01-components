import React from 'react'
import styles from './friends-list.module.css'

const FriendListItem = ({isOnline, avatar, name}) => {
    return (
        <li  className={styles.friendsItem }>
            <span className={isOnline ? styles.isOnline : styles.isOffline}></span>
            <img src={avatar}
                 alt={name}
                 width="48"
                 className={styles.friendAvatar}>
            </img>
            <p className={styles.friendName}>{name}</p>
        </li>
    )
}

export default FriendListItem