import React from 'react'
import PropTypes from 'prop-types'
import styles from './profile.module.css'
import defaultImg from '../profile-img.jpg'



const Profile = ({ avatar, name, tag, location, stats }) => {
    return (
    <div className={styles.profileCard}>
        
    <div className={styles.descrition}>
        <img src={avatar}
            alt="Аватар пользователя"
                width={220}
                className={styles.avatar}
        />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
        </div>

    <ul className={styles.statsList}>
        <li className={styles.statsItem}>
            <span >Followers</span>
            <span className={styles.statsValue}>{stats.followers}</span>
        </li>
        <li className={styles.statsItem}>
            <span>Views</span>
            <span className={styles.statsValue}>{stats.views}</span>
        </li>
        <li className={styles.statsItem}>
            <span>Likes</span>
            <span className={styles.statsValue}>{stats.likes}</span>
        </li>
    </ul>   
    </div>
    )

}


Profile.defaultProps = {
    avatar: defaultImg
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
}

export default Profile