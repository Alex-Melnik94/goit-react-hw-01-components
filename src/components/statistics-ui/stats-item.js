import React from 'react'
import styles from './statistics.module.css'

const StatsItem = ({label, percentage}) => {
    return (
        
         <li className={styles.statsItem}>
            <span>{label}</span>
            <span className={styles.statsValue}>{percentage}%</span>
        </li>
                    )
}



export default StatsItem