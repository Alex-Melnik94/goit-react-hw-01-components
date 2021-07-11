import React from 'react'
import friends from '../../data/friends.json'
import FriendsList from './friends-list'

const FriendList = () => {
    return (
        <FriendsList
            friends={friends}
        />
    )
}

export default FriendList