import React from 'react'
import PropTypes from 'prop-types'
import Transactions from './transactions'
import styles from './transactions.module.css'

const TransactionHistory = ({items}) => {
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
                {items.map(({ id, type, amount, currency }) => <Transactions
                                                                    key={id}
                                                                    type={type}
                                                                    amount={amount}
                                                                    currency={currency}
                        
                                                                />
                )}
                
            </tbody>
        </table>
        </div>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
}

export default TransactionHistory