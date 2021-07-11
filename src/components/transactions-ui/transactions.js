import React from 'react'
import PropTypes from 'prop-types'
import styles from './transactions.module.css'

const Transactions = ({transactions}) => {
    return (
        <div className={styles.transactionsContainer}>
            <table className={styles.table}>
            <thead className={styles.tableHead}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map(({id, type, amount, currency}) => {
                    return (
                        <tr key={id} className={styles.tableRow}>
                            <td className={styles.tableData}>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                    )
                })}
                
            </tbody>
        </table>
        </div>
        
    )
}

Transactions.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
}

export default Transactions