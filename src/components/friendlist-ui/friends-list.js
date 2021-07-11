import React from 'react'
import PropTypes from 'prop-types'
import styles from './friends-list.module.css'

const FriendsList = ({friends}) => {
    return (
        <div className={styles.friendsContainer}>
            <ul className={styles.friendsList}>
            {friends.map(({id, isOnline, avatar, name}) => {
                return (
                    <li key={id} className={styles.friendsItem }>
                        {isOnline ? <span className={styles.isOnline}></span>
                            : <span className={styles.isOffline}></span>
                        }
                        <img src={avatar}
                            alt={name}
                            width="48"
                        className={styles.friendAvatar}>
                        </img>
                        <p className={styles.friendName}>{name}</p>
                    </li>
                )
            })}
            
        </ul>
        </div>
        
    )
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }))
}

export default FriendsList