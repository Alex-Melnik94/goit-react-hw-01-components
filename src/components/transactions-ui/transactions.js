import React from 'react'
import styles from './transactions.module.css'

const Transactions = ({ id, type, amount, currency }) => {
    return (
       <tr key={id} className={styles.tableRow}>
            <td className={styles.tableData}>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
        
    )
}

export default Transactions