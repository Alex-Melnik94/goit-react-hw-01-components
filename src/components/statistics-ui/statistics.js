import React from 'react'
import PropTypes from 'prop-types'
import styles from './statistics.module.css'
import StatsItem from './stats-item'


const Statistics = ({title, stats}) => {
    return (
        <section className={styles.section}>
            {title && <h2 className={styles.title}>{title}</h2>}
            
            <ul className={styles.statsList}>
                {stats.map((stat) => <StatsItem key={stat.id}
                                                label={stat.label}
                                                percentage={stat.percentage}
                                    />
                    )}
            </ul>
            </section>
    )
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}

export default Statistics