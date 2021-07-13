import React from 'react'
import PropTypes from 'prop-types'
import FriendListItem from './friends-list-item'
import styles from './friends-list.module.css'


const FriendList = ({friends}) => {
    return (
         <div className={styles.friendsContainer}>
            <ul className={styles.friendsList}>
                {friends.map(friend => <FriendListItem 
                                            key={friend.id}
                                            isOnline={friend.isOnline}
                                            avatar={friend.avatar}
                                            name={friend.name}
                                        />
                )}
            </ul>
        </div>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }))
}

export default FriendList