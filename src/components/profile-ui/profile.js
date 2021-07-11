import React from 'react'
import Description from './description.js'
import Stats from './stats'
import user from '../../data/user.json'
import styles from './profile.module.css'


const Profile = () => {
    return (
    <div className={styles.profileCard}>
    <Description
      avatar={user.avatar}
      name={user.name}
      tag={user.tag}
      location={user.location}
    />
    <Stats
        followers={user.stats.followers}
        viesws={user.stats.views}
        likes={user.stats.likes}
    />    
    </div>
    )

}

export default Profile