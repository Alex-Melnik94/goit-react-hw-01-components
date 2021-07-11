import React from 'react'
import Profile from './components/profile-ui/profile'
import Statistics from './components/statistics-ui/statistics'
import FriendList from './components/friendlist-ui/friend-list'
import TransactionHistory from './components/transactions-ui/transaction-history'
import styles from './styles.module.css';



const App = () => {
  return (
    <div className={styles.container}>
    <Profile />
      <Statistics />
      <FriendList />
      <TransactionHistory />
    </div>
    )
}

export default App
