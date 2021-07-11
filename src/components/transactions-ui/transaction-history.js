import React from 'react'
import transactions from '../../data/transactions.json'
import Transactions from './transactions'

const TransactionHistory = () => {
    return (
        <Transactions
            transactions={transactions}
        />
    )
}

export default TransactionHistory