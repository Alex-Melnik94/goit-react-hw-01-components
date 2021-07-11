import React from 'react'
import PropTypes from 'prop-types'
import styles from './statistics.module.css'

const StatsList = ({title, stats}) => {
    return (
        <section className={styles.section}>
            {title && <h2 className={styles.title}>{title}</h2>}
            
            <ul className={styles.statsList}>
                {stats.map(({id, label, percentage}) => {
                    return (
                    <li key={id} className={styles.statsItem}>
                        <span>{label}</span>
                        <span className={styles.statsValue}>{percentage}%</span>
                    </li>
                    )
                })}
            </ul>
            </section>
        )
}

StatsList.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}

export default StatsList