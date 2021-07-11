import React from 'react'
import statisticalData  from '../../data/statistical-data.json'
import StatsList from './stats-list'


const Statistics = () => {
    return (
        <StatsList
            title="Upload stats"
            stats={statisticalData}
        />
    )
}

export default Statistics